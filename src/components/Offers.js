import Image from 'next/image';
import React from 'react';

const Offers = () => {
  return (
    <div className="flex items-center mt-5">
      <Image
        src="/_next/static/media/offers.png"
        alt="offers"
        width={75}
        height={60}
      />
      <div className="ml-3">
        <h1 className="text-[16px] font-medium">
          Special Offers <span className="p-1 border rounded-full">😱</span>
        </h1>
        <p className="text-[12px]">
          We make sure you get the offer you need at best prices
        </p>
      </div>
    </div>
  );
};

export default Offers;
