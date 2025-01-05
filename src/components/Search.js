import React from 'react';

const Search = () => {
  const products = [
    {
      imageUrl: '/_next/static/media/Kurti.png',
      productName: 'Women Printed Kurta',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹1500',
      price: 1500,
      MRP: '₹2499',
      discount: 40,
      rating: 56890,
    },
    {
      imageUrl: '/_next/static/media/HRX.png',
      productName: 'HRX by Hrithik Roshan',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹2499',
      price: 1500,
      MRP: '₹4999',
      discount: 50,
      rating: 344567,
    },
  ];
  return (
    <div className="search-container relative bg-white border-black border flex items-center justify-between h-[40px] mt-5 rounded-md">
      <svg
        className="search-icon absolute left-2"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_17043)">
          <path
            d="M12.9167 11.6667H12.2583L12.025 11.4417C12.8417 10.4917 13.3333 9.25833 13.3333 7.91667C13.3333 4.925 10.9083 2.5 7.91667 2.5C4.925 2.5 2.5 4.925 2.5 7.91667C2.5 10.9083 4.925 13.3333 7.91667 13.3333C9.25833 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z"
            fill="#BBBBBB"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_17043">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <input
        type="text"
        placeholder="Search any Product..."
        className="search-input pl-10 focus:outline-none placeholder:text-[#BBBBBB]"
      />

      <svg
        className="audio-icon absolute right-1"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_17047)">
          <path
            d="M12 14C13.66 14 14.99 12.66 14.99 11L15 5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14ZM10.8 4.9C10.8 4.24 11.34 3.7 12 3.7C12.66 3.7 13.2 4.24 13.2 4.9L13.19 11.1C13.19 11.76 12.66 12.3 12 12.3C11.34 12.3 10.8 11.76 10.8 11.1V4.9ZM17.3 11C17.3 14 14.76 16.1 12 16.1C9.24 16.1 6.7 14 6.7 11H5C5 14.41 7.72 17.23 11 17.72V21H13V17.72C16.28 17.24 19 14.42 19 11H17.3Z"
            fill="#BBBBBB"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_17047">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Search;
