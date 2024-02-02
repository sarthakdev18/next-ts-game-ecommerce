import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1300, min: 764 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};  

const FeaturedProductSlider = () => {
  return (
    <Carousel additionalTransfrom={0} arrows={true} autoPlay={true} autoPlaySpeed={5000} centerMode={false} infinite responsive={responsive} itemClass='item'>
        <ProductCard title='GTA V' actualPrice='Rs. 1500' discountPrice='Rs. 950' category='Open World' image='/images/gta5.jpg' />
        <ProductCard title='Read Dead Redemption 2' actualPrice='Rs. 1999' discountPrice='Rs. 1099' category='Action-Adventure' image='/images/rdr2.jpg' />
        <ProductCard title='Forza Horizon 5' actualPrice='Rs. 3499' discountPrice='Rs. 1499' category='Racing' image='/images/fh5.jpg' />
        <ProductCard title="Assassin's Creed Mirage" actualPrice='Rs. 3499' discountPrice='Rs. 1749' category='Action-Adventure' image='/images/mirage.jpg' />
        <ProductCard title='Far Cry 6' actualPrice='Rs. 2999' discountPrice='Rs. 1349' category='First-person Shooter' image='/images/fc6.jpg' />
        <ProductCard title='Fall Guys' actualPrice='Rs. 700' discountPrice='FREE' category='Battle Royale' image='/images/fg.jpg' />
        <ProductCard title='Pacify' actualPrice='Rs. 250' discountPrice='Rs. 110' category='Horror' image='/images/pacify.jpg' />
        <ProductCard title="Marvel's Spider-Man: Miles Morales" actualPrice='Rs. 3299' discountPrice='Rs. 1749' category='Action-Adventure' image='/images/miles.jpg' />
        <ProductCard title='FIFA 24' actualPrice='Rs. 4499' discountPrice='Rs. 1799' category='Sports/Simulation' image='/images/fifa24.jpg' />
        <ProductCard title='Mortal Combat 11' actualPrice='Rs. 4999' discountPrice='Rs. 2199  ' category='Fighting' image='/images/mortal11.jpg' />
    </Carousel>
  )
}

export default FeaturedProductSlider