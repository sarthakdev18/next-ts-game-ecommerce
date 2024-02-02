import React from 'react'
import Image from 'next/image';
import { CalendarIcon, TagIcon } from '@heroicons/react/16/solid';

interface Props {
    image: string;
    title: string;
}

const NewsCard = ({image, title}: Props) => {
  return (
    <>
      <div className='col-span-2'>
        <Image className='w-[100%] h-[100%]' src={`${image}`} alt={title} width={300} height={300}/>
      </div>

      <div className='col-span-4'>
        <h1 className='text-[22px] mb-[1rem] capitalize text-white'>{title}</h1>

        <div className='flex mb-[0.4rem] items-center space-x-2'>
            <CalendarIcon className='w-[1rem] h-[1rem] text-white opacity-85' />
            <p className='text-gray-500 opacity-90 font-thin text-[14px]'>1 February, 2024</p>
        </div>

        <div className='flex mb-[0.4rem] items-center space-x-2'>
            <TagIcon className='w-[1rem] h-[1rem] text-white opacity-85' />
            <p className='text-gray-500 opacity-90 font-thin text-[14px]'>GTA VI, game, news</p>
        </div>

        <div className='text-white mb-[1rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorem totam perspiciatis officiis cumque asperiores doloremque eaque ipsum, vel similique! Impedit modi numquam ipsa? Et, officiis quibusdam. Voluptatibus, necessitatibus sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, temporibus? Lorem ipsum dolor sit amet. Lorem, ipsum.
        </div>

        <button className='before:ease bg-white text-[17px] relative h-12 w-36 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-blue-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180'>
            <span className='relative z-10'>Read More</span>
        </button>
      </div>
    </>
  )
}

export default NewsCard