import React from 'react'
import { blog_data, assets } from '@/assets/assets'
import Image from 'next/image'
const BlogItem = () => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
        <Image src={blog_data[0].image} alt='blog' width={400} height={400} className='border-b border-black' />
        <p className='ml-5 mt-5 text-sm font-medium inline-block bg-black text-white px-2 py-1'>{blog_data[0].category}</p>
        <div className='p-5'>
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{blog_data[0].title}</h5>
            <p className='mb-3 text-sm text-gray-700 line-clamp-3 tracking-tight'>{blog_data[0].description}</p>
            <div className='inline-flex items-center py-2 font-semibold text-center'>
                Read More <Image src={assets.arrow} alt='arrow' width={12} className='ml-2 hover:scale-110 transition-all duration-300' />
            </div>
        </div>
    </div>
  )
}

export default BlogItem