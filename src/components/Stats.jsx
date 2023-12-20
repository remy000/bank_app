import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} $ flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-bold font-poppins xs:font-[40px] text-[32px] xs:leading-[53px] leading-[43px] text-gradient">
            {stat.value}
          </h4>
          <p className="font-semibold font-poppins xs:font-[20px] text-[15px] xs:leading-[26px] leading-[20px] text-white capitalize ml-3 ">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
