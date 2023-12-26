import React from "react";
import { testimonial } from "../constants";
// import { motion } from "../utils/motion";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setCurrentTestimonial(
      (prevTestimonial) => (prevTestimonial + 1) % testimonial.length
    );
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) =>
      prevTestimonial === 0 ? testimonial.length - 1 : prevTestimonial - 1
    );
  };

  // Automatic transition to the next testimonial every few seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextTestimonial();
    }, 5000); // interval duration (in milliseconds)

    // Clear interval when component unmounts or when currentTestimonial changes
    return () => clearInterval(intervalId);
  }, [currentTestimonial]);

  return (
    <div className="items-center mt-40">
      <div className="flex items-center justify-between mx-10">
        <button
          onClick={prevTestimonial}
          className="bg-gray-900 rounded-full w-12 h-12 flex items-center justify-center text-white focus:outline-none"
        >
          &lt;
        </button>
        <div className="">
          <div className="bg-gray-500 p-8 rounded-xl shadow-md mx-auto max-w-5xl w-full">
            <div>
              <h3 className="text-lg font-bold mb-2">
                {testimonial[currentTestimonial].name}
              </h3>
              <p className="text-gray-900 mb-4">
                {testimonial[currentTestimonial].date}
              </p>
              <p className="text-gray-800">
                {testimonial[currentTestimonial].reference}
              </p>
              {testimonial[currentTestimonial].icon && (
                <img
                  src={testimonial[currentTestimonial].icon}
                  alt="icon"
                  className="mt-4 mx-auto w-12 h-12 rounded-full"
                />
              )}
            </div>
          </div>
        </div>
        <button
          onClick={nextTestimonial}
          className="bg-gray-900 rounded-full w-12 h-12 flex items-center justify-center text-white focus:outline-none"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
