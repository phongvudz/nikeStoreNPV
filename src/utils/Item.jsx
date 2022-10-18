import React from "react";

const Item = ({
  ifExists,
  id,
  title,
  text,
  rating,
  btn,
  img,
  price,
  color,
  shadow,
}) => {
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} 
        grid items-center  py-4 px-5 rounded-xl 
        ${ifExists ? "justify-items-start" : "justify-items-center"}
        transition-all 
        duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div
          className={`grid items-center ${
            ifExists ? "justify-items-start" : "justify-items-center"
          }`}
        >
          <h1 className=" text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="filter drop-shadow text-slate-200 text-base md:text-sm font-normal">
            {text}
          </p>
          <div className="flex items-center justify-between w-28">
            <div className="flex items-center bg-white/80 px-1 rounded">
              <h1 className="text-black text-sm blur-effect-theme">${price}</h1>
            </div>
            <div className=" flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon-style w-5 h-5 md:w-4 md:h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-30 my-2 gap-3">
          <button
            type="button"
            className="bg-white/90 rounded blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon-style text-slate-900"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            type="button"
            className="bg-white/90 rounded blur-effect-theme text-sm px-2 py-1 button-theme shadow shadow-sky-200"
          >
            {btn}
          </button>
        </div>
        <div
          className={`flex items-center ${
            ifExists ? "absolute top-5 right-1" : "justity-center"
          }`}
        >
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className={` hover:-rotate-12 transitions-theme ${
              ifExists
                ? "h-auto w-64 lg:w-56 md:w-48 object-contain -rotate-[35deg]"
                : "h-36 w-64"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Item;
