import Image from 'next/image';
import React from 'react';

const ShopCard = ({
  imageUrl,
  productName,
  priceInRupees,
  mrp,
  discount,
  rating,
  description,
  index,
}) => {
  return (
    <div className="ml-3 sm:w-1/2 lg:w-[174px]" key={index}>
      <Image
        className="bg-contain"
        width={170}
        height={124}
        src={imageUrl}
        alt={productName}
      />
      <h1 className="text-[12px] mt-1">{productName}</h1>
      <p className="text-[10px] mt-1 text-wrap w-[120px]">{description}</p>
      <p className="text-[12px]">{priceInRupees}</p>
      <div className="flex items-center">
        <p className="product-mrp line-through opacity-40 text-[12px]">{mrp}</p>
        <p className="text-[10px] ml-2 text-[#FE735C]">{discount}% Off</p>
      </div>
      <div className="flex items-center">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.99999 9.07413L9.60499 11.25L8.64832 7.14913L11.8333 4.38996L7.63916 4.03413L5.99999 0.166626L4.36082 4.03413L0.166656 4.38996L3.35166 7.14913L2.39499 11.25L5.99999 9.07413Z"
            fill="#EDB310"
          />
        </svg>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.99999 9.07413L9.60499 11.25L8.64832 7.14913L11.8333 4.38996L7.63916 4.03413L5.99999 0.166626L4.36082 4.03413L0.166656 4.38996L3.35166 7.14913L2.39499 11.25L5.99999 9.07413Z"
            fill="#EDB310"
          />
        </svg>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.99999 9.07413L9.60499 11.25L8.64832 7.14913L11.8333 4.38996L7.63916 4.03413L5.99999 0.166626L4.36082 4.03413L0.166656 4.38996L3.35166 7.14913L2.39499 11.25L5.99999 9.07413Z"
            fill="#EDB310"
          />
        </svg>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.99999 9.07413L9.60499 11.25L8.64832 7.14913L11.8333 4.38996L7.63916 4.03413L5.99999 0.166626L4.36082 4.03413L0.166656 4.38996L3.35166 7.14913L2.39499 11.25L5.99999 9.07413Z"
            fill="#EDB310"
          />
        </svg>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.99999 9.07413L9.60499 11.25L8.64832 7.14913L11.8333 4.38996L7.63916 4.03413L5.99999 0.166626L4.36082 4.03413L0.166656 4.38996L3.35166 7.14913L2.39499 11.25L5.99999 9.07413Z"
            fill="#EDB310"
          />
        </svg>
        <p className="text-[10px] text-gray-400 ml-1">{rating}</p>
      </div>
    </div>
  );
};

export default ShopCard;
