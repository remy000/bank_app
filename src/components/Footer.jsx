import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} max-w-[310px]`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-wrap justify-between flex-row md:mt-0 mt-10">
          {footerLinks.map((link) => (
            <div
              key={link.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-bold font-poppins text-[18px] text-white mb-4">
                {link.title}
              </h4>
              <ul>
                {link.links.map((footerLink, index) => (
                  <li
                    key={footerLink.name}
                    className={`font-normal font-poppins text-[16px] leading-[20px] text-secondary hover:text-dimWhite cursor-pointer
                    ${index !== link.links.length - 1 ? "mb-4" : "mb-0"}`}
                  >
                    {footerLink.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row md:mt-0 mt-6 justify-center items-center">
        {socialMedia.map((media, index) => (
          <img
            src={media.icon}
            alt={media.id}
            key={media.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer
          ${index !== socialMedia.length - 1 ? "mr-8" : "mr-0"} mt-4`}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
