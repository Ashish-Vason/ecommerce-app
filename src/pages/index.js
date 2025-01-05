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
    {
      imageUrl: '/_next/static/media/Philips.png',
      productName: 'Philips BHH880/10',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹999',
      price: 999,
      MRP: '₹8999',
      discount: 80,
      rating: 27344,
    },
    {
      imageUrl: '/_next/static/media/Titan.png',
      productName: 'TITAN Men Watch- 1806N ',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹13499',
      price: 13499,
      MRP: '₹17999',
      discount: 30,
      rating: 344567,
    },
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
    {
      imageUrl: '/_next/static/media/Philips.png',
      productName: 'Philips BHH880/10',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹999',
      price: 999,
      MRP: '₹8999',
      discount: 80,
      rating: 27344,
    },
    {
      imageUrl: '/_next/static/media/Titan.png',
      productName: 'TITAN Men Watch- 1806N ',
      description: 'Neque porro quisquam est qui dolorem ipsum quia',
      priceInRupees: '₹13499',
      price: 13499,
      MRP: '₹17999',
      discount: 30,
      rating: 344567,
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
      <ProductCard products={products} />
      {/* New Arrivals Card */}
      <NewArrivals />
      <Sponsered />
      <Footer />
    </div>
  );
}
