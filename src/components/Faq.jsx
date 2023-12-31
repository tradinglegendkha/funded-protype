import React from "react";
import { useState } from "react";
import { Frequently } from "../constants";

const Collapsible = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const toggleCollapsible = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="flex justify-between">
        <button
          className="text-white bg-gray-800 font-bold py-2 px-4 text-[21px] my-2"
          onClick={toggleCollapsible}
        >
          {question}
        </button>
        <span
          className="text-[21px] cursor-pointer"
          onClick={toggleCollapsible}
        >
          {open ? "-" : "+"}
        </span>
      </div>
      {open && (
        <div className="p-4">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  return (
    <div className="p-20">
      <div className="text-center text-xl leading-[1.5]">
        <p className="text-[#5e5e72] my-3">We are here to help</p>
        <p className="text-[#798089] text-[16px]">
          Please visit our help center for more
        </p>
        <h1 className="text-5xl font-normal">Frequently asked questions</h1>
      </div>
      <div className="my-10">
        {Frequently.map((item, index) => (
          <Collapsible
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
