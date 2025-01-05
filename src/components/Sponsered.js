import Image from 'next/image';
import React from 'react';

const Sponsered = () => {
  return (
    <div className="sponsered-section mt-5 full-width">
      {/* <h1 className="text-[20px] font-semibold">Sponsered</h1> */}
      <Image
        src="/_next/static/media/LastOffer.png"
        alt="lastOffer"
        width={351}
        height={292}
        className="full-width"
      />
    </div>
  );
};

export default Sponsered;
