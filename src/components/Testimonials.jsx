import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedBackCard from "./FeedBackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="w-full flex justify-between items-center flex-col md:flex-row sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          What Our Client <br className="sm:block hidden" />
          Say About Us
        </h1>
        <div className="w-full  md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, porro odit assumenda harum at aliquid repellat soluta,
            velit perspiciatis delect
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative ">
        {feedback.map((card) => (
          <FeedBackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
