import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className='h-[13vh] bg-gray-800'>
        <div className='w-[95%] md:w-[80%] mx-auto h-[100%] flex items-center justify-between'>
            <div>
                <Image src="/images/logo.png" alt='logo' width={140} height={140} />
            </div>

            <div className='h-[50%] hidden flex-[0.7] overflow-hidden bg-gray-200 rounded-md md:flex items-center'>
                <input type="text" placeholder='Search game (Eg. GTA V)' className='block pl-[0.5rem] w-[90%] outline-none mx-auto h-[100%] bg-gray-200' />
                <MagnifyingGlassIcon className='w-[1.8rem] h-[1.4rem] hover:text-orange-500 transition-all cursor-pointer' />
            </div>

            <div className='flex items-center justify-center space-x-8'>
                <div className='relative'>
                    <ShoppingBagIcon className='w-[2rem] h-[2rem] text-white hover:text-yellow-400 transition-all cursor-pointer' />
                    <div className='w-[20px] text-[12px] absolute top-[-7px] right-[-7px] h-[20px] flex items-center text-white justify-center font-semibold rounded-full bg-red-400'>
                        2
                    </div>
                </div>

                <HeartIcon className='w-[2rem] h-[2rem] text-white hover:text-red-600 transition-all cursor-pointer' />
                <UserIcon className='w-[2rem] h-[2rem] text-white hover:text-blue-500 transition-all cursor-pointer' />
            </div>
        </div> 
    </div>
  )
}

export default Navbar