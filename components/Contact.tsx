import { PhoneIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='bg-gray-900 pt-[5rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[8rem]'>
            <div>
                <h1 className='text-[25px] md:text-[30px] lg:text-[35px] leading-[2.4rem] text-white'>
                    Get latest updates on new items, news, tournaments and more!
                </h1>
                
                <p className='text-[17px] text-white mt-[0.8rem] mb-[1.5rem] opacity-70'>
                    Get a Rs. 500 voucher off your first order over Rs. 2500
                </p>

                <div className='w-[100%] relative h-[2.7rem] mb-[0.3rem] bg-white'>
                    <input type="email" placeholder='Enter your email' className='w-[70%] h-[2.7rem] md:w-[79%] bg-white ml-4 outline-none ' />
                    <button className='w-[20%] md:w-[18.5%] right-0 absolute h-[2.7rem] bg-blue-500 hover:bg-blue-700 transition-all duration-200'>
                        Subscribe
                    </button>

                    <p className='text-[14px] mt-[0.2rem] text-white capitalize opacity-35 font-thin'>
                        By subscribing, you agree to our Terms & Conditions and Privacy & Cookies Policy
                    </p>
                </div>
            </div>

            <div className='mt-[1.5rem] md:mt-0'>
                <h1 className='text-[20px] md:text-[25px] lg:text-[30px] leading-[2.4rem] text-white'>Need help? <br />(+91 1234567890)</h1>

                <div className='mt-[2rem] flex items-center space-x-2'>
                    <Image width={130} height={130} className='object-contain' alt='playstore' src="/images/gp.png" />
                    <Image width={130} height={130} className='object-contain' alt='appstore' src="/images/as.png" />
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Contact