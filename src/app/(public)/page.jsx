import BestSelling from '@/components/public/home/BestSelling';
import Hero from '@/components/public/home/Hero';
import LatestProducts from '@/components/public/home/LatestProducts';
import Newsletter from '@/components/public/home/Newsletter';
import OurSpecs from '@/components/public/home/OurSpec';
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <LatestProducts />
      <BestSelling />
      <OurSpecs />
      <Newsletter />
    </div>
  );
}

export default page