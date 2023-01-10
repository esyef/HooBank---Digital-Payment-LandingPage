import React from "react";

type props = {
  styles: string;
};

const Button = ({ styles }: props) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Get started
    </button>
  );
};

export default Button;
