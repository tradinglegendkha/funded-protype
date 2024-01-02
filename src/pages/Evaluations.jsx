import React, { useState } from "react";
import EvaluationsHeader from "../components/EvaluationsHeader";
import {
  OneStepEval,
  FastTrackEval,
  EODEval,
  StaticEval,
  DiamondHandsEval,
} from "../constants/evalcon";

const Evaluations = () => {
  const [activeEval, setActiveEval] = useState(OneStepEval);
  const evalbutton = "inline-block bg-slate-900 p-4 rounded-xl";

  const handleButtonClick = (evaluations) => {
    setActiveEval(evaluations);
  };

  return (
    <div className="py-40">
      <div className="">
        <div className="px-10">
          <h1 className="text-5xl">Evaluations</h1>
          <div className="flex flex-wrap justify-around mt-10 font-bold">
            <div>
              <button
                className={evalbutton}
                onClick={() => handleButtonClick(OneStepEval)}
              >
                One Step Evaluations
              </button>
            </div>
            <button
              className={evalbutton}
              onClick={() => handleButtonClick(FastTrackEval)}
            >
              Fast Track Evaluations
            </button>
            <button
              className={evalbutton}
              onClick={() => handleButtonClick(EODEval)}
            >
              End of Day Evaluations
            </button>
            <button
              className={evalbutton}
              onClick={() => handleButtonClick(StaticEval)}
            >
              Static Evaluations
            </button>
            <button
              className={evalbutton}
              onClick={() => handleButtonClick(DiamondHandsEval)}
            >
              Diamond Hand Evaluation
            </button>
          </div>
          <div className="mt-10 px-20 flex flex-wrap justify-around text-blue-800">
            <p>No Scaling Rule</p>
            <p>$75 for resets</p>
            <p>$80.00 per month once qualified or One-Time Activation.</p>
            <p>Requires a minimum of 5 trading days.</p>
          </div>
        </div>
        {activeEval && <EvaluationsHeader evaluations={activeEval} />}
      </div>
    </div>
  );
};

export default Evaluations;
