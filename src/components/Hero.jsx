import React from "react";
import Clips from "../utils/Clips";
import SocialLink from "../utils/SocialLink";

const Hero = ({ heroApi }) => {
  const { title, img, btnText, socialLinks, subtitle, videos } = heroApi;

  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] absolute w-auto top-0 right-0 left-0 opacity-100 z-10"></div>
        <div className="relative opacity-100 z-20 grid items-center  justify-items-center nike-container">
          <div className="grid items-center justify-items-center mt-28 md:mt-24">
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl filter font-extrabold drop-shadow-md text-sky-200">
              {title}
            </h1>
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl filter font-extrabold drop-shadow-md text-sky-200">
              {subtitle}
            </h1>
            <button
              type="button"
              className="button-theme bg-slate-200 shadow-slate-200 rounded-xl my-10 sm:my-5"
            >
              {btnText}
            </button>
            <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
              {videos?.map((val, i) => (
                <Clips {...val} key={i} />
              ))}
            </div>
            <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] right-[11%] xl:right-0 w-auto h-auto">
              {socialLinks?.map((item, i) => (
                <SocialLink {...item} key={i} />
              ))}
            </div>
          </div>
          <div>
            <img
              src={img}
              alt="hero-img/hero"
              className="w-auto mt-4 h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[35deg] hover:rotate-0 object-fill cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
