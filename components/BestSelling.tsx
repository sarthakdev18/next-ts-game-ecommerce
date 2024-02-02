import React from 'react'
import ProductCard from './helper/ProductCard'

const BestSelling = () => {
  return (
    <div className='bg-gray-900 pt-[4rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto flex items-center justify-between'>
            <h1 className='md:text-[28px] text-[22px] lg:text-[34px] text-white'>Best Sellers</h1>
            <button className='uppercase text-[13px] md:text-[15px] text-yellow-300'>View All Products</button>
        </div>

        <div className='grid mt-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 w-[80%] mx-auto'>
            <div>
                <ProductCard title='GTA V' actualPrice='Rs. 1500' discountPrice='Rs. 950' category='Open World' image='/images/gta5.jpg' />
            </div>

            <div>
                <ProductCard title='Read Dead Redemption 2' actualPrice='Rs. 1999' discountPrice='Rs. 1099' category='Action-Adventure' image='/images/rdr2.jpg' />
            </div>

            <div>
                <ProductCard title='Forza Horizon 5' actualPrice='Rs. 3499' discountPrice='Rs. 1499' category='Racing' image='/images/fh5.jpg' />
            </div>

            <div>
                <ProductCard title="Assassin's Creed Mirage" actualPrice='Rs. 3499' discountPrice='Rs. 1749' category='Action-Adventure' image='/images/mirage.jpg' />
            </div>

            <div>
                <ProductCard title='Far Cry 6' actualPrice='Rs. 2999' discountPrice='Rs. 1349' category='First-person Shooter' image='/images/fc6.jpg' />
            </div>

            <div>
                <ProductCard title='Fall Guys' actualPrice='Rs. 700' discountPrice='FREE' category='Battle Royale' image='/images/fg.jpg' />
            </div>
        </div> 
    </div>
  )
}

export default BestSelling