import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header
        className={
          nav
            ? "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[110]  blur-effect-theme "
            : "absolute top-7 left-0 right-0 opacity-100 z-50"
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 h-auto ${nav && "filter brightness-0"}`}
            />
          </div>
          <ul className="flex items-center gap-2">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class={`icon-style ${
                  nav && "text-slate-900 transition-all duration-300"
                }`}
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class={`icon-style ${
                  nav && "text-slate-900 transition-all duration-300"
                }`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </li>
            <li>
              <button
                type="button"
                className="border-none relative transition-all duration-300 active:scale-110  outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class={`icon-style ${
                    nav && "text-slate-900 transition-all duration-300"
                  }`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <h1
                  className={`absolute  top-4 right-0 rounded-full  shadow-slate-100 w-4 h-4 text-[0.65rem] leading-tight font-medium flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    nav
                      ? "bg-slate-900 text-slate-100"
                      : " bg-slate-100 text-slate-900 shadow-slate-100"
                  }`}
                >
                  0
                </h1>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
