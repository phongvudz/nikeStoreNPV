import React from "react";

const Clips = ({ imgSrc, clip }) => {
  return (
    <>
      <div className="relative h-28 w-32 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 lg:w-28 md:w-25 sm:w-16 lg:h-24 md:h-20 sm:h-14">
        <img
          src={imgSrc}
          alt="img/clips"
          className="w-full inset-0 h-full object-cover absolute rounded-xl opacity-100 z-10 transition-opacity duration-500"
        />
        <div className="bg-white/75 blur-effect-theme absolute top-11 left-11 lg:top-8 lg:left-9 sm:top-4 sm:left-5 right-0 w-8 h-8 md:w-5 md:h-5 flex items-center justify-center rounded-full opacity-100 z-[100]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="icon-style text-slate-900 md:w-3 md:h-3"
          >
            <path
              fillRule="evenodd"
              d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="absolute top-0 left-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 "
        >
          <source type="video/mp4" src={clip} />
        </video>
      </div>
    </>
  );
};

export default Clips;
