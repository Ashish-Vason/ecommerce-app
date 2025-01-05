import React from 'react';

const FeatureSection = () => {
  return (
    <div className="feature-container flex justify-between mt-5 items-center">
      <h1 className="font-bold text-[18px]">All Featured</h1>
      <div className="buttons-container flex">
        <button className="sort-button flex items-center bg-white rounded-md px-2 py-1 mr-2 shadow-md focus:shadow-xl">
          <p className="px-1">Sort</p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_110_7279)">
              <path
                d="M11.3247 12.0485V6.38386H9.66234V12.0485H7.16884L10.4935 15.2727L13.8182 12.0485H11.3247ZM5.5065 0.727295L2.18182 3.95154H4.67533V9.61618H6.33767V3.95154H8.83117L5.5065 0.727295ZM11.3247 12.0485V6.38386H9.66234V12.0485H7.16884L10.4935 15.2727L13.8182 12.0485H11.3247ZM5.5065 0.727295L2.18182 3.95154H4.67533V9.61618H6.33767V3.95154H8.83117L5.5065 0.727295Z"
                fill="#232327"
              />
            </g>
            <defs>
              <clipPath id="clip0_110_7279">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="filter-button flex items-center bg-white rounded-md px-2 py-1 mr-2 shadow-md focus:shadow-xl">
          <p className="px-1">Filter</p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6666 2H1.33331L6.66665 8.30667V12.6667L9.33331 14V11.1533V8.30667L14.6666 2Z"
              stroke="#232327"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.33335 8H6.66669V11.9111L9.33335 13.3333V8Z"
              fill="#232327"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FeatureSection;
