import React from "react";

const CartCount = () => {
  return (
    <>
      <div className="flex h-11 bg-white/75 items-center justify-between px-3 sticky top-0 left-0 right-0 w-full">
        <div className="flex items-center gap-3">
          <div className="grid items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className="grid items-center">
            <h1 className="text-base font-medium">
              Your Cart{" "}
              <span className="bg-theme-cart text-slate-100 px-1 py-0.5 rounded font-normal text-xs">
                (Items)
              </span>
            </h1>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="rounded bg-theme-cart text-slate-100 active:scale-90 p-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-white stroke-[2]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
