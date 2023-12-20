import React from "react";
import styles from "../style";
import { discount } from "../assets";
import GetStarted from "./GetStarted";
import { robot } from "../assets";
const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingX}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 sm:mb-4">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20% </span>
            Discount
            <span className="text-white"> 1Month</span>
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[68px] text-[45px] text-white ss:leading-[60px] leading-normal mr-4 ">
            The Next
            <br className="hidden sm:block" />
            <span className="text-gradient sm:mr-1"> Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0 mt-4 ml-3">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[58px] text-[45px] text-white ss:leading-[100px] leading-normal">
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          nesciunt amet quae earum totam ipsa, corrupti alias excepturi
          molestiae, ratione nisi dignissimos animi
        </p>
      </div>
      <div className="m-0 sm:m-3">
        <img src={robot} alt="robot" className="w-[100%] h-[100%] relative" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter} mt-2`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
