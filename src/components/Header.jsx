import React from "react";
import { motion } from "framer-motion";
import { styles } from "../utils/styles";
import { BullCanvas } from "./canvas";
import { EarthCanvas } from "./canvas";

const Header = () => {
  return (
    <div className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start my-10`}
      >
        <div className="flex justify-end">
          <div className="flex flex-col">
            <h4 className="text-[24px] text-gray-200">
              Keep <span className="font-bold text-blue-900"> 100%</span> of
              your first
              <span className="font-bold text-blue-900"> $12,500</span> in
              profits!
            </h4>
            <h1 className="text-[51px] font-bold">Elite Trader Funding</h1>
            <div>
              <p className="text-[17px] text-gray-400 leading-[1.5rem]">
                We provide traders with an opportunity to earn <br /> live
                funding based on their trading performance <br /> in simulated
                accounts.
              </p>
              <ul className="text-[16px] list-disc mx-9 my-2 text-gray-300">
                <li>Trade multiple accounts under one login!</li>
                <li>Several evaluation options.</li>
                <li>
                  Keep <span className="font-bold text-blue-900"> 90%</span> of
                  all profits after your first $12,500!
                </li>
                <li>Optional evaluation reset fee is only $75</li>
                <li>
                  Automatic free evaluation account resets on monthly <br />
                  subscription renewal if account is failed.
                </li>
              </ul>
            </div>
            <div className="flex text-[18px] mt-3 gap-20">
              <button className="p-3 px-[30px] bg-[#060724] rounded-xl cursor-pointer">
                View Evaluations
              </button>
              <button className="p-3 px-[30px] bg-[#060724] rounded-xl cursor-pointer">
                Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen flex mx-[500px]">
        {/* <EarthCanvas /> */}
        <BullCanvas />
      </div>
    </div>
  );
};

export default Header;
