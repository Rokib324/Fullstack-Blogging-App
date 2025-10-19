"use client"

import React, { useEffect, useState, use } from 'react'
import { blog_data, assets } from '@/assets/assets'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Link from 'next/link'
import axios from 'axios'

const page = ({params}) => {
    const resolvedParams = use(params);
    const [data, setData] = useState(null);

    const fetchBlogData = async () => {
        try {
            const response = await axios.get('/api/blog',{
                params: {
                    id: resolvedParams.id
                }
            })
            if(response.data.success){
                setData(response.data.blog)
            } else {
                console.error('No blog found')
            }
        } catch (error) {
            console.error('Error fetching blog:', error)
        }
    }

    useEffect(() => {
        fetchBlogData()
    }, [])
  return (data ? <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Link href='/'>
            <Image src={assets.logo} alt='logo' width={120} className='w-[130px] sm:w-auto' />
            </Link>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt='arrow' width={16} height={16} /></button>
        </div>
        <div className='text-center my-24'>
            <h1 className='text-3xl sm:text-5xl font-medium max-w-[740px] m-auto'>{data?.title}</h1>
            <Image src={data.author_img} alt='author' width={60} height={60} className='rounded-sm mx-auto mt-6' />
            <p className='mt-2 font-medium text-gray-600'>{data?.author}</p>
        </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image src={data.image} alt='blog' width={1200} height={720} className='w-full border-4 border-white' />
        
        <div className='blog-content' dangerouslySetInnerHTML={{ __html: data?.description }} />

        
        <div className='my-24'>
            <p className='text-gray-600 text-sm'>Share this post on social media</p>
            <div className='flex gap-4 mt-4'>
                <Image src={assets.facebook_icon} alt='facebook' width={40} />
                <Image src={assets.googleplus_icon} alt='googleplus' width={40} />
                <Image src={assets.twitter_icon} alt='twitter' width={40} />
            </div>
        </div>
    </div>
    <Footer />
    </>: <div>Loading...</div>
  )
}

export default page