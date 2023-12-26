import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../utils/styles";
import { brokers } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";

const BrokerCard = ({ index, icon, title }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-white rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-50 object-contain" />
        </div>
      </motion.div>
    </Tilt>
  );
};

const SupportedBrokers = () => {
  return (
    <>
      <div className="px-40 py-20 mt-10 text-center">
        <motion.div variants={textVariant()}>
          <p>Who we work with</p>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[37px] leading-[30px] text-center"
        >
          Tools of the Trade
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {brokers.map((broker, index) => (
            <BrokerCard key={broker.title} index={index} {...broker} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SupportedBrokers;
