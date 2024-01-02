import React from "react";
import { Link } from "react-router-dom";

const SeeMore = () => {
  return (
    <div className="text-1xl px-20 my-[-25px] hover:underline">
      <Link to="/evaluations">See More</Link>
    </div>
  );
};

export default SeeMore;
