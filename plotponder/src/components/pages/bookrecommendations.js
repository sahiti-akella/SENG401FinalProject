// BookRecommendations.js

import React from "react";
import "./styles.css"; // Import the styles

function BookRecommendations(props) {
  return (
    <div className="flex flex-col px-16 pt-10 pb-6 bg-white max-md:px-5">
      <div className="flex gap-5 justify-between pr-7 w-full text-black max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex-auto text-5xl font-bold max-md:text-4xl">
          PlotPonder 💭
        </div>
        <div className="flex gap-5 justify-between items-center my-auto text-2xl max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto self-stretch">Community</div>
          <div className="flex-auto self-stretch my-auto font-bold text-rose-950">
            Recommendations
          </div>
          <div className="flex-auto self-stretch my-auto">View Account</div>
        </div>
      </div>
      <div className="mt-48 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-16 py-12 w-full text-2xl text-black bg-white rounded-2xl shadow-sm max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="..."
                className="w-44 max-w-full aspect-[0.63]"
                alt="Book Cover"
              />
              <div className="self-stretch mt-7 font-bold text-center">
                Percy Jackson and the Olympians: The Lightning Thief
              </div>
              <div className="mt-9 whitespace-nowrap">Rick Riordan</div>
            </div>
          </div>
          {/* Repeat the above block for additional books */}
        </div>
      </div>
      <div className="justify-center items-center self-end px-16 py-8 mt-5 max-w-full text-3xl text-black whitespace-nowrap shadow-sm bg-stone-400 rounded-[70px] w-[449px] max-md:px-5">
        Ask Our BookBot!
      </div>
    </div>
  );
}

export default BookRecommendations;
