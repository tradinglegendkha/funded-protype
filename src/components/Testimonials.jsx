import React from "react";
import { testimonial } from "../constants";
// import { motion } from "../utils/motion";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial(
      (prevTestimonial) => (prevTestimonial + 1) % testimonial.length
    );
  };

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
          <div className="bg-gray-900 p-8 rounded-xl shadow-md max-w-5xl w-full">
            <div>
              <h3 className="text-lg font-bold mb-2">
                {testimonial[currentTestimonial].name}
              </h3>
              <p className="text-gray-500 mb-4">
                {testimonial[currentTestimonial].date}
              </p>
              <p className="text-gray-300">
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
      <div className="text-center text-[10px] text-stone-500 mt-2">
        <p>
          Testimonials appearing on this website may not be representative of
          other clients or customers and are not a guarantee of future
          performance or success.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
