import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import TopProduct from '@/components/TopProduct';
import BestSelling from '@/components/BestSelling';
import News from '@/components/News';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <TopProduct />
      <BestSelling />
      <News />
      <Contact />
      <Footer />
    </div>
  );  
}

export default HomePage;