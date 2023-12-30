import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { slideIn } from "../utils/motion";
import { textVariant } from "../utils/motion";
import { styles } from "../utils/styles";
import { RocketAsteroidCanvas } from "./canvas";

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
            <div className="leading-[2rem]">
              <p>Futures is virtually open for 24 hours and 6 days a week.</p>
              <p>Theres no time decay like in traditional options.</p>
              <p>Plus you do not need the $25000 to have no PDT</p>
            </div>
          </div>
          <div>
            <h1 className="text-[33px] bg-slate-800 rounded-md px-3 inline-block">
              Why Us?
            </h1>
            <div className="leading-[2rem]">
              <p>
                Why risk few thousands of your personal money to trade futures{" "}
                when you can buy an evalutation in which you learn and grow with
                us?
              </p>
              <p>
                You don't day trade? We are one of the few prop firms that
                offers swing account
              </p>
              <p>Get paid multiple times per month</p>
              <p>No news trading restrictions</p>
              <p>
                Bunch of competitions, givaways, and sales. Join our discord!
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyUs;
