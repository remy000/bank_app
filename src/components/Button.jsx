import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      className={`py-4 px-6 bg-blue-400 rounded-[40px]  font-poppins font-bold text-[18px] outline-none ${styles} hover:bg-green-700 hover:text-white`}
    >
      Get Started
    </button>
  );
};

export default Button;
