import React from 'react'
import { blog_data, assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
const BlogItem = ({title, description, category, author, author_img, image, id}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
        <Link href={`/blogs/${id}`}>
        <Image src={image} alt='blog' width={400} height={400} className='border-b border-black' />
        </Link>
        <p className='ml-5 mt-5 text-sm font-medium inline-block bg-black text-white px-2 py-1'>{category}</p>
        <div className='p-5'>
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
            <p className='mb-3 text-sm text-gray-700 line-clamp-3 tracking-tight'
            dangerouslySetInnerHTML={{ __html: description }} />
            <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center hover:scale-110 transition-all duration-300'>
                Read More <Image src={assets.arrow} alt='arrow' width={12} className='ml-2' />
            </Link>
        </div>
    </div>
  )
}

export default BlogItem