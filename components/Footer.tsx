import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-gray-800 pt-[3rem] pb-[3rem]'>
        <div className='w-[80%] border-b-[1.2px] pb-[2rem] border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]'>
            <div>
                <h1 className='text-[25px] uppercase text-white mb-[1rem]'>Gaming</h1>
                <p className='text-[14px] text-white opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique velit debitis, quidem, deleniti nihil nulla perferendis officiis eligendi incidunt nesciunt voluptate cum voluptatibus, quia reiciendis ad?</p>
                <p className='text-[14px] mt-[1.4rem] text-white opacity-80'>
                    (+91) 1234567890 - info@gmail.com
                </p>
            </div>

            <div className='lg:mx-auto'>
                <h1 className='text-[20px] text-white mb-[1.5rem]'>Information</h1>
                <p className='footer_link'>About us</p>
                <p className='footer_link'>Privacy Policy</p>
                <p className='footer_link'>Terms & Conditions</p>
                <p className='footer_link'>Cookies Policy</p>
                <p className='footer_link'>Shipping Policy</p>
                <p className='footer_link'>Dropshipping</p>
            </div>

            <div className='lg:mx-auto'>
                <h1 className='text-[20px] text-white mb-[1.5rem]'>Account</h1>
                <p className='footer_link'>Dashboard</p>
                <p className='footer_link'>Account Settings</p>
                <p className='footer_link'>My Orders</p>
                <p className='footer_link'>Track My Orders</p>
            </div>

            <div className='lg:mx-auto'>
                <h1 className='text-[20px] text-white mb-[1.5rem]'>Shop</h1>
                <p className='footer_link'>Affiliate</p>
                <p className='footer_link'>Best Sellers</p>
                <p className='footer_link'>Latest Products</p>
                <p className='footer_link'>Products on Sale</p>
            </div>
        </div>

        <div className='mt-[2rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 justify-between w-[80%] mx-auto'>
            <p className='text-[14px] text-white opacity-60'>
                &#169; Copyright 
            </p>

            <Image src="/images/pay.svg" alt='pay' width={230} height={230} className='object-contain sm:ml-auto' />
        </div>
    </div>
  )
}

export default Footer