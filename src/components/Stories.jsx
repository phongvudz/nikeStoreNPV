import React from "react";
import Title from "../utils/Title";

const Stories = ({ story: { news, title } }) => {
  return (
    <>
      <div className="nike-container mb-11 relative">
        <Title title={title} />
        <div className="relative h-[600px] w-full overflow-hidden ">
          <div className="flex gap-3 p-2 scrollbar-hide my-5 flex-row overflow-x-scroll track ">
            {news?.map((item, i) => (
              <div
                key={i}
                className="border-2 rounded-xl min-w-[400px] min-h-[500px]"
              >
                <div className="rounded">
                  <img
                    src={item.img}
                    alt={`img/story-img/${item.title}`}
                    className="rounded-xl w-full h-50% object-contain"
                  />
                </div>
                <div className="px-4 pt-2">
                  <div className="flex justify-between my-2">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-red-500"
                      >
                        <path
                          d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0
                       01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                        />
                      </svg>
                      <h1 className="text-sm font-semibold">{item.like}</h1>
                    </div>
                    <div className="flex items-center gap-1 font-semibold ">
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
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {item.time}
                    </div>
                    <h1 className="text-md text-sky-600">
                      # <span className="font-bold ">{item.by}</span>
                    </h1>
                  </div>
                  <div className="p-2">
                    <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
                    <p className="text-state-900 line-clamp-5">{item.text}</p>
                  </div>
                  <div className="pt-4 mb-5">
                    <button
                      type="button"
                      className="button-theme bg-slate-900 shadow-slate-900 text-slate-100 w-full py-3"
                    >
                      {item.btn}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
