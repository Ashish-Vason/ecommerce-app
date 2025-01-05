import React, { useState, useEffect } from 'react';

const DealsBanner = ({ color, second }) => {
  const initialTimeInSeconds = 22 * 3600 + 55 * 60 + 20;

  // State to store the remaining time
  const [timeInSeconds, setTimeInSeconds] = useState(initialTimeInSeconds);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(
      2,
      '0'
    )}m ${String(secs).padStart(2, '0')}s`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeInSeconds((prevTime) =>
        prevTime > 0 ? prevTime - 1 : initialTimeInSeconds
      );
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [initialTimeInSeconds]);
  return (
    <div
      className={`deals-bannerContainer-${color} flex justify-between bg-[#${color}] p-3 items-center rounded-md text-white mt-5`}
    >
      <div>
        <h1 className="text-[16px] font-semibold">
          {second ? 'Trending Products ' : 'Deal of the Day'}
        </h1>
        <p className="text-[12px] flex items-center">
          {!second ? (
            <>
              <svg
                className="mr-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_110_11)">
                  <path
                    d="M14.6667 3.79995L11.6 1.19995L10.7333 2.19995L13.8 4.79995L14.6667 3.79995ZM5.26668 2.26662L4.40001 1.26662L1.33334 3.79995L2.20001 4.79995L5.26668 2.26662ZM8.33334 5.33328H7.33334V9.33328L10.4667 11.2666L11 10.4666L8.33334 8.86662V5.33328ZM8.00001 2.66662C4.66668 2.66662 2.00001 5.33328 2.00001 8.66662C2.00001 12 4.66668 14.6666 8.00001 14.6666C11.3333 14.6666 14 12 14 8.66662C14 5.33328 11.3333 2.66662 8.00001 2.66662ZM8.00001 13.3333C5.40001 13.3333 3.33334 11.2666 3.33334 8.66662C3.33334 6.06662 5.40001 3.99995 8.00001 3.99995C10.6 3.99995 12.6667 6.06662 12.6667 8.66662C12.6667 11.2666 10.6 13.3333 8.00001 13.3333Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_110_11">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {formatTime(timeInSeconds)} remaining
            </>
          ) : (
            <>
              <svg
                className="mr-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_133_174)">
                  <path
                    d="M4.66667 7.33325H6V8.66659H4.66667V7.33325ZM14 3.99992V13.3333C14 14.0666 13.4 14.6666 12.6667 14.6666H3.33333C2.59333 14.6666 2 14.0666 2 13.3333L2.00667 3.99992C2.00667 3.26659 2.59333 2.66659 3.33333 2.66659H4V1.33325H5.33333V2.66659H10.6667V1.33325H12V2.66659H12.6667C13.4 2.66659 14 3.26659 14 3.99992ZM3.33333 5.33325H12.6667V3.99992H3.33333V5.33325ZM12.6667 13.3333V6.66659H3.33333V13.3333H12.6667ZM10 8.66659H11.3333V7.33325H10V8.66659ZM7.33333 8.66659H8.66667V7.33325H7.33333V8.66659Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_133_174">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Last Date 29/02/22
            </>
          )}
        </p>
      </div>
      <div className="border border-white rounded-md items-center flex  px-2 py-1">
        <button className="text-[16px] font-semibold">View all</button>

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
  );
};

export default DealsBanner;
