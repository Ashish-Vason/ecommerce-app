import React from 'react';
import ShopCard from './ShopCard';

const ProductCard = ({ products }) => {
  // const products = [
  //   {
  //     imageUrl: '/_next/static/media/Kurti.png',
  //     productName: 'Women Printed Kurta',
  //     description: 'Neque porro quisquam est qui dolorem ipsum quia',
  //     priceInRupees: '₹1500',
  //     price: 1500,
  //     MRP: '₹2499',
  //     discount: 40,
  //     rating: 56890,
  //   },
  //   {
  //     imageUrl: '/_next/static/media/HRX.png',
  //     productName: 'HRX by Hrithik Roshan',
  //     description: 'Neque porro quisquam est qui dolorem ipsum quia',
  //     priceInRupees: '₹2499',
  //     price: 1500,
  //     MRP: '₹4999',
  //     discount: 50,
  //     rating: 344567,
  //   },
  //   {
  //     imageUrl: '/_next/static/media/Philips.png',
  //     productName: 'Philips BHH880/10',
  //     description: 'Neque porro quisquam est qui dolorem ipsum quia',
  //     priceInRupees: '₹999',
  //     price: 999,
  //     MRP: '₹8999',
  //     discount: 80,
  //     rating: 27344,
  //   },
  //   {
  //     imageUrl: '/_next/static/media/Titan.png',
  //     productName: 'TITAN Men Watch- 1806N ',
  //     description: 'Neque porro quisquam est qui dolorem ipsum quia',
  //     priceInRupees: '₹13499',
  //     price: 13499,
  //     MRP: '₹17999',
  //     discount: 30,
  //     rating: 344567,
  //   },

  // ];
  return (
    <div className="flex items-center mt-5 text-wrap overflow-scroll w-[100%]">
      {products.map(
        (
          {
            imageUrl,
            productName,
            priceInRupees,
            MRP,
            discount,
            rating,
            description,
          },
          index
        ) => (
          <ShopCard
            key={index}
            imageUrl={imageUrl}
            productName={productName}
            priceInRupees={priceInRupees}
            mrp={MRP}
            discount={discount}
            rating={rating}
            description={description}
          />
        )
      )}
    </div>
  );
};

export default ProductCard;
