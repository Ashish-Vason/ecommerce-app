import Image from 'next/image';
import React from 'react';

const Categories = () => {
  const categoriesData = [
    {
      image:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074368/jkdxxjktxrg2cdyctkns.png',
      categoryName: 'Beauty',
    },
    {
      image:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074986/unsplash__3Q3tsJ01nc_sfwawo.png',
      categoryName: 'Fashion',
    },
    {
      image:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074987/unsplash_GCDjllzoKLo_sqneio.png',
      categoryName: 'Kids',
    },
    {
      image:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074988/unsplash_xPJYL0l5Ii8_u86qvh.png',
      categoryName: 'Mens',
    },
    {
      image:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074987/unsplash_OYYE4g-I5ZQ_tgbszl.png',
      categoryName: 'Womens',
    },
    {
      image:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074986/unsplash__3Q3tsJ01nc_sfwawo.png',
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
