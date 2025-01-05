import Banner from '@/components/Banner';
import Categories from '@/components/Categories';
import DealsBanner from '@/components/DealsBanner';
import FeatureSection from '@/components/FeatureSection';
import Header from '@/components/Header';
import NewArrivals from '@/components/NewArrivals';
import Offers from '@/components/Offers';
import ProductCard from '@/components/ProductCard';
import Search from '@/components/Search';
import Sponsered from '@/components/Sponsered';
import Footer from '@/components/Footer';

export default function Home() {
  const products = [
    {
      imageUrl:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074986/Mask_Group_zkngz7.png',
      productName: 'Women Printed Kurta',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹1500',
      price: 1500,
      MRP: '₹2499',
      discount: 40,
      rating: 56890,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074986/Mask_Group_1_fgps1w.png',
      productName: 'HRX by Hrithik Roshan',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹2499',
      price: 1500,
      MRP: '₹4999',
      discount: 50,
      rating: 344567,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074986/Mask_Group_2_r2kvq1.png',
      productName: 'Philips BHH880/10',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹999',
      price: 999,
      MRP: '₹8999',
      discount: 80,
      rating: 27344,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074986/Mask_Group_3_khr8m3.png',
      productName: 'TITAN Men Watch- 1806N ',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹13499',
      price: 13499,
      MRP: '₹17999',
      discount: 30,
      rating: 344567,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074986/Mask_Group_zkngz7.png',
      productName: 'Women Printed Kurta',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹1500',
      price: 1500,
      MRP: '₹2499',
      discount: 40,
      rating: 56890,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074986/Mask_Group_1_fgps1w.png',
      productName: 'HRX by Hrithik Roshan',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹2499',
      price: 1500,
      MRP: '₹4999',
      discount: 50,
      rating: 344567,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074986/Mask_Group_2_r2kvq1.png',
      productName: 'Philips BHH880/10',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹999',
      price: 999,
      MRP: '₹8999',
      discount: 80,
      rating: 27344,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074986/Mask_Group_3_khr8m3.png',
      productName: 'TITAN Men Watch- 1806N ',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹13499',
      price: 13499,
      MRP: '₹17999',
      discount: 30,
      rating: 344567,
    },
  ];

  const shopCards = [
    {
      imageUrl:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074987/unsplash_0vsk2_9dkqo_ykww8o.png',
      productName: 'Womem Skirt ',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹999',
      price: 13499,
      MRP: '₹2999',
      discount: 50,
      rating: 344567,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736075670/unsplash_yTBMYCcZQRs_ctzzxx.png',
      productName: 'Nikon Professional Camera ',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹17999',
      price: 13499,
      MRP: '₹22999',
      discount: 20,
      rating: 4567,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736075669/unsplash_0vsk2_9dkqo_1_kq0xxq.png',
      productName: "Men's Jacket",
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹7999',
      price: 13499,
      MRP: '₹11999',
      discount: 40,
      rating: 14567,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736075871/unsplash_yTBMYCcZQRs_1_r0yjdy.png',
      productName: 'Black Dress',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹1999',
      price: 13499,
      MRP: '₹3999',
      discount: 70,
      rating: 1567,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736074987/unsplash_0vsk2_9dkqo_ykww8o.png',
      productName: 'Womem Skirt ',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹999',
      price: 13499,
      MRP: '₹2999',
      discount: 50,
      rating: 344567,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736075670/unsplash_yTBMYCcZQRs_ctzzxx.png',
      productName: 'Nikon Professional Camera ',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹17999',
      price: 13499,
      MRP: '₹22999',
      discount: 20,
      rating: 4567,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736075669/unsplash_0vsk2_9dkqo_1_kq0xxq.png',
      productName: "Men's Jacket",
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹7999',
      price: 13499,
      MRP: '₹11999',
      discount: 40,
      rating: 14567,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dumrq9zcw/image/upload/v1736075871/unsplash_yTBMYCcZQRs_1_r0yjdy.png',
      productName: 'Black Dress',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹1999',
      price: 13499,
      MRP: '₹3999',
      discount: 70,
      rating: 1567,
    },
  ];
  return (
    <div className="main-container m-2 p-1">
      {/* <h1>Hello World</h1> */}
      <Header />
      <Search />
      <FeatureSection />
      <Categories />
      <Banner />
      <DealsBanner color="4392F9" second={false} />
      <ProductCard products={products} />
      <Offers />
      <DealsBanner color="FD6E87" second={true} />
      <ProductCard products={shopCards} />
      {/* New Arrivals Card */}
      <NewArrivals />
      <Sponsered />
      <Footer />
    </div>
  );
}
