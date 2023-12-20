import React from "react";
import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[40px]
    ${index !== features.length - 1 ? "mb-6" : "m-0"} feature-card`}
    >
      <div className={`w-[60px] h-[60px] rounded-4 ${styles.flexCenter}`}>
        <img src={icon} alt="icons" className="w-[50%] object-contain" />
      </div>
      <div className="flex-1 flex-col ml-3">
        <h4 className="font-bold font-poppins text-white text-[18px] leading-[23px]">
          {title}
        </h4>
        <p className="font-semibold font-poppins text-gradient text-[12px] leading-[18px]">
          {content}
        </p>
      </div>
    </div>
  );
};

const business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          You Do The Business, <br className="sm:block hidden" />
          We Will Handle the Money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sunt
          quidem soluta quisquam totam illo repellendus atque quas quam!
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default business;
