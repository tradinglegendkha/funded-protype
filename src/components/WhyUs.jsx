import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { slideIn } from "../utils/motion";
import { textVariant } from "../utils/motion";
import { styles } from "../utils/styles";
import { RocketAsteroidCanvas } from "./canvas";

const NumberedBulletPoint = ({ number, content }) => (
  <div className="flex items-start mt-3">
    <div className="rounded-full bg-emerald-900 flex items-center justify-center h-8 w-8 mr-3">
      <p className="text-stone-300">{number}</p>
    </div>
    <div style={{ maxWidth: "calc(100% - 40px)" }}>
      <p>{content}</p>
    </div>
  </div>
);

const WhyUs = () => {
  return (
    <motion.div variants={textVariant()}>
      <div className="flex justify-around">
        <div className="w-full h-screen">
          <RocketAsteroidCanvas />
        </div>
        <div className="flex flex-col gap-20 mt-20">
          <div className="">
            <h1 className="text-[33px] bg-slate-800 rounded-md px-3 inline-block">
              Why Futures?
            </h1>
            <div className="leading-[2rem] light-white border-2 border-teal-900 p-2 rounded-md mt-3 inline-block">
              <NumberedBulletPoint
                number="1"
                content="Futures is virtually open for 24 hours and 6 days a week."
              />
              <NumberedBulletPoint
                number="2"
                content="Theres no time decay unlike in traditional options."
              />
              <NumberedBulletPoint
                number="3"
                content="Plus you do not need the $25000 to have no PDT"
              />
            </div>
          </div>
          <div>
            <h1 className="text-[33px] bg-slate-800 rounded-md px-3 inline-block">
              Why Us?
            </h1>
            <div className="leading-[2rem] light-white border-2 border-teal-900 p-2 rounded-md mt-3 inline-block">
              <NumberedBulletPoint
                number="1"
                content="No need to risk thousands of dollars to risk in future when you can buy an evalutation with the fraction of the cost"
              />
              <NumberedBulletPoint
                number="2"
                content="We are one of the few prop firms that offers swing account"
              />
              <NumberedBulletPoint
                number="3"
                content="Get paid multiple times per month"
              />
              <NumberedBulletPoint
                number="4"
                content="No news trading restrictions"
              />
              <NumberedBulletPoint
                number="5"
                content="Bunch of competitions, giveaways, and sales. Join our discord!"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyUs;
