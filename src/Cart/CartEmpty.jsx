import React from "react";
import emptybag from "../assets/emptybag.png";

const CartEmpty = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen px-11 text-center gap-7">
        <img
          src={emptybag}
          alt="emptybag/img/"
          className="w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110 cursor-pointer"
        />
        <button
          type="button"
          className="button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg  shadow-orange-500 flex items-center justify-center text-sm py-2 gap-3 px-5 font-semibold active:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span>Back To Nike Store</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
