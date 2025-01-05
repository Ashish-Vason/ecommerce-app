import Image from 'next/image';
import React from 'react';

const Sponsered = () => {
  return (
    <div className="sponsered-section mt-5 full-width">
      {/* <h1 className="text-[20px] font-semibold">Sponsered</h1> */}
      <Image
        src="https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074528/LastOffer_cdxafn.png"
        alt="lastOffer"
        width={351}
        height={292}
        className="full-width"
      />
    </div>
  );
};

export default Sponsered;
