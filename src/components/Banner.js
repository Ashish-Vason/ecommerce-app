import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="banner-container w-[100%] h-[169px] mt-5 rounded-sm text-white bg-contain max-w-[100%]">
      <div className="absolute top-[16%] left-3">
        <h1 className="font-bold text-xl space-x-2">50-40% OFF</h1>
        <p className="text-[12px] mt-1">Now in (product)</p>
        <p className="text-[12px] mt-[0.5]">All Colors</p>
        <div className="border border-white rounded-md p-1 px-2 mt-2 flex items-center">
          <button className="text-[16px] font-semibold">Shop Now</button>

          <svg
            className="ml-2"
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00001 0.333374L8.06001 1.27337L11.1133 4.33337H0.333344V5.66671H11.1133L8.05334 8.72671L9.00001 9.66671L13.6667 5.00004L9.00001 0.333374Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
