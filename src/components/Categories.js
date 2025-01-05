import Image from 'next/image';
import React from 'react';

const Categories = () => {
  const categoriesData = [
    {
      image: '/_next/static/media/Beauty.png',
      categoryName: 'Beauty',
    },
    {
      image: '/_next/static/media/Fashion.png',
      categoryName: 'Fashion',
    },
    {
      image: '/_next/static/media/clothes.png',
      categoryName: 'Kids',
    },
    {
      image: '/_next/static/media/Mens.png',
      categoryName: 'Mens',
    },
    {
      image: '/_next/static/media/Womens.png',
      categoryName: 'Womens',
    },
    {
      image: '/_next/static/media/Womens.png',
      categoryName: 'Gifts',
    },
  ];
  return (
    <div className="categories-cardContainer mt-2 bg-white shadow-md rounded-md my-2">
      <div className="category-cards flex overflow-scroll">
        {categoriesData.map(({ categoryName, image }, index) => (
          <div key={index} className="m-3">
            <Image
              key={index}
              className="max-w-[unset]"
              src={image}
              width={56}
              height={66}
              alt={categoryName}
            />
            <p className="text-center text-[12px] mt-1">{categoryName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
