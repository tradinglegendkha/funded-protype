import React from "react";
import logo_horizontal from "../assets/logo_horizontal.png";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="px-10 py-10 bg-gray-900">
      <div className="flex justify-around">
        <div className="max-w-xs">
          <img src={logo_horizontal} alt="logo" />
          <div className="flex gap-10 mt-5 mx-2">
            <FaYoutube size={30} />
            <FaDiscord size={30} />
            <FaFacebookSquare size={30} />
            <FaXTwitter size={30} />
          </div>
        </div>
        <div>
          <h1 className="text-2xl mb-3">Need Something?</h1>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Timeline</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl mb-3">Legal</h1>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Risk Disclosure</li>
            <li>Performance Disclosure</li>
            <li>Trading Disclaimer</li>
            <li>
              Data/Technology/Platform <br /> Disclaimer
            </li>
          </ul>
        </div>
      </div>
      <div className="px-20 mt-20">
        <p>
          © 2023 Elite Trader Funding LLC, elitetraderfunding.com. All Rights
          Reserved.
        </p>
      </div>
      <div className="text-xs leading-4 px-20 pt-5">
        <div class="border-b-2 border-gray-500 mt-5"></div>
        <h1 className="text-sm font-bold my-4">
          DISCLOSURES: COMMODITY FUTURES TRADING COMMISSION FUTURES REQUIRED
          DISCLAIMER
        </h1>
        <p>
          Commodity Futures Trading Commission Futures and Options trading has
          large potential rewards, but also large potential risk. You must be
          aware of the risks and be willing to accept them in order to invest in
          the futures markets. Don't trade with money you can't afford to lose.
          This is neither a solicitation nor an offer to Buy/Sell futures,
          stocks or options on the same. No representation is being made that
          any account will or is likely to achieve profits or losses similar to
          those discussed on this web site. The past performance of any trading
          system or methodology is not necessarily indicative of future results.
        </p>
        <br />
        <p>
          CFTC RULE 4.41 - Hypothetical or simulated performance results have
          certain limitations. Unlike an actual performance record, simulated
          results do not represent actual trading. Also, since the trades have
          not been executed, the results may have under-or-over compensated for
          the impact, if any, of certain market factors, such as lack of
          liquidity. Simulated trading programs in general are also subject to
          the fact that they are designed with the benefit of hindsight. No
          representation is being made that any account will or is likely to
          achieve profit or losses similar to those shown. No representation is
          being made that any account will, or is likely to achieve profits or
          losses similar to those discussed within this site, support and texts.
          Our course(s), products and services should be used as learning aids
          only and should not be used to invest real money. If you decide to
          invest real money, all trading decisions should be your own
        </p>
        <br />
        <p>
          Testimonials Disclosure: Testimonials appearing on this website may
          not be representative of other clients or customers and are not a
          guarantee of future performance or success.
        </p>
      </div>
    </div>
  );
};

export default Footer;
