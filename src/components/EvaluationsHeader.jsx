import React from "react";
import {
  OneStepEval,
  FastStepEval,
  EODEval,
  StaticEval,
} from "../constants/evalcon";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const EvaluationsHeaderCard = ({ OneStepEvals }) => {
  return (
    <motion.div>
      <div className="bg-gray-900 border-2 border-blue-900 px-5 py-5 rounded-md flex-wrap">
        <h1 className="text-5xl text-center m-4">{OneStepEvals.name}</h1>
        <div className="bg-[#080f1c] py-3 px-3 leading-8 rounded-md">
          <div className="text-[17px] flex justify-between">
            <p className="text-textlight">Drawdown: </p>
            {OneStepEvals.max_drawdown}
          </div>
          <div className="text-[17px] flex justify-between">
            <p className="text-textlight">Profit Target: </p>
            {OneStepEvals.profit_target}
          </div>
          <p className="text-[17px]">{OneStepEvals.max_positions}</p>
          <div className="text-center">
            <button className="bg-[#050b17] px-3 mt-2 rounded-lg hover:bg-[#081b40]">
              Buy Now
            </button>
          </div>
          <div className="text-3xl text-center mt-4">
            {OneStepEvals.price}{" "}
            <span className="text-xs text-textlight">/monthly</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EvaluationsHeader = ({ displayCount }) => {
  const evaluationsToShow = displayCount
    ? OneStepEval.slice(0, displayCount)
    : OneStepEval;

  return (
    <div className="px-20 py-20">
      <div className="my-5 leading-9">
        <h1 className="text-5xl">One Step Evaluations</h1>
        <p>
          1 step, 5 minimum days traded, intraday unrealized PNL trailing
          drawdown.{" "}
          <a
            href="https://elitetraderfunding.com/1stepeval/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ccd4e2]"
          >
            See all rules
          </a>
        </p>
      </div>

      <div className="gap-10 grid grid-cols-3">
        {evaluationsToShow.map((OneStepEvals, index) => (
          <EvaluationsHeaderCard
            key={`OneStepEval-${index}`}
            OneStepEvals={OneStepEvals}
          />
        ))}
      </div>
    </div>
  );
};

export default EvaluationsHeader;
