import React from "react";
import styles, { layout } from "../style";
import { card } from "../assets";
import Button from "./Button";
const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find Better Deal <br className="sm:block hidden" />
          <span className="text-gradient"> Secure Your Money & Payment </span>
          With The Best Bank!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
          obcaecati distinctio delectus reiciendis dolorum quidem doloribus
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6 gap-6">
          <Button />
        </div>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt="card"
          className="relative w-[100%] h-[100%] rounded-full"
        />
      </div>
    </section>
  );
};

export default CardDeal;
