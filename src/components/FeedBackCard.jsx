import React from "react";
import { quotes } from "../assets";

const FeedBackCard = ({ content, name, title }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card ">
      <img
        src={quotes}
        alt="quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-normal font-poppins text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-col ml-4">
        <h4 className="text-white font-poppins font-bold text-[15px] leading-[25px]">
          {name}
          <p className="text-gradient font-poppins font-normal text-[10px] leading-[20px]">
            {title}
          </p>
        </h4>
      </div>
    </div>
  );
};

export default FeedBackCard;
