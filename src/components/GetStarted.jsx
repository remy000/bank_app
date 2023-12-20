import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[125px] h-[125px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full hover:scale-95 hover:text-white hover:bg-blue-950`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="text-[18px] font-poppins font-medium leading-[23px] ">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrowUp"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="text-[18px] font-poppins font-medium leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
