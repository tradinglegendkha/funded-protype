import React from "react";
import {
  OneStepEval,
  FastTrackEval,
  EODEval,
  StaticEval,
} from "../constants/evalcon";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const EvaluationsHeaderCard = ({ evaluation }) => {
  const borderColorClass = `border-2 ${evaluation.borderColor} rounded-md`;

  return (
    <motion.div>
      <div className={`bg-gray-900 px-5 py-5 ${borderColorClass}`}>
        <h1 className="text-5xl text-center m-4">{evaluation.name}</h1>
        <div className="bg-[#080f1c] py-3 px-3 leading-8 rounded-md">
          <div className="text-[17px] flex justify-between">
            <p className="text-textlight">Drawdown: </p>
            {evaluation.max_drawdown}
          </div>
          <div className="text-[17px] flex justify-between">
            <p className="text-textlight"> Daily Drawdown: </p>
            {evaluation.daily_drawdown}
          </div>
          <div className="text-[17px] flex justify-between">
            <p className="text-textlight">Profit Target: </p>
            {evaluation.profit_target}
          </div>
          <div className="text-[17px] flex justify-between">
            <p className="text-textlight">Max Position: </p>
            {evaluation.max_positions}
          </div>
          <div className="text-center">
            <button className="bg-[#050b17] px-3 mt-2 rounded-lg hover:bg-[#081b40]">
              Buy Now
            </button>
          </div>
          <div className="text-3xl text-center mt-4">
            {evaluation.price}
            <span className="text-xs text-textlight">/monthly</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EvaluationsHeader = ({ evaluations }) => {
  const { title, description, all_rules } = evaluations[0];

  return (
    <div className="px-20 py-10">
      <div className="my-5 leading-9">
        <h1 className="text-5xl">{title}</h1>
        <p className="flex justify-between">
          {description}{" "}
          <a
            href={all_rules}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ccd4e2]"
          >
            See all rules
          </a>
        </p>
      </div>
      <div className="gap-10 grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
        {evaluations.map((evaluation, index) => (
          <EvaluationsHeaderCard
            key={`evaluation-${index}`}
            evaluation={evaluation}
          />
        ))}
      </div>
    </div>
  );
};

export default EvaluationsHeader;
