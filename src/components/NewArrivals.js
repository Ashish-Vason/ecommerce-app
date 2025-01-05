import Image from 'next/image';
import React from 'react';

const NewArrivals = () => {
  return (
    <div className="mt-5 full-width">
      <Image
        src="https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074986/Mask_Group_4_qsh7e5.png"
        width={343}
        height={200}
        className="full-width"
      />
      <h1 className="text-[20px] font-bold mt-3">New Arrivals </h1>
      <div className="flex items-center justify-between">
        <p className="text-[16px] ">Summer’ 25 Collections </p>
        <button className="bg-[#F83758] text-white text-[12px] p-2 px-2 flex items-center rounded-md font-semibold">
          View all{' '}
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
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
