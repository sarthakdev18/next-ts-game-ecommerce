import React from 'react'
import NewsCard from './helper/NewsCard'

const News = () => {
  return (
    <div className='bg-gray-800 pt-[5rem] pb-[3rem]'>
        <h1 className='w-[80%] mx-auto md:text-[28px] text-[22px] lg:text-[34px] text-white'>Latest News</h1>

        <div className='mt-[2rem]'>
            <div className='grid grid-cols-1 md:grid-cols-6 gap-[3rem] w-[80%] mx-auto'>
                <NewsCard image='/images/gta61.png' title='New Update news' />
                <NewsCard image='/images/gta62.jpg' title="Check What's New!" />
                <NewsCard image='/images/gta63.3.jpg' title='New Tournament!' />
            </div>
        </div>
    </div>
  )
}

export default News