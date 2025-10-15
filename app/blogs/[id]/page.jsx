"use client"

import React, { useEffect, useState } from 'react'
import { blog_data, assets } from '@/assets/assets'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Link from 'next/link'

const page = ({params}) => {

    const [data, setData] = useState(null);

    const fetchBlogData = async () => {
        for (let i = 0; i < blog_data.length; i++){
            if (Number(params.id) === blog_data[i].id){
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
            }
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
            <Image src={data.author_img} alt='author' width={60} height={60} className='rounded-full mx-auto mt-6 border border-white' />
            <p className='mt-2 font-medium text-gray-600'>{data?.author}</p>
        </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image src={data.image} alt='blog' width={800} height={800} className='w-full border-4 border-white' />
        <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
        <p>{data?.description}</p>
        <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Setting</h3>
        <p className='my-3'>Fazley R. brother and Ruhi, my house has an electricity short circuit, so I can’t work right now because my laptop charge is below 10%. I’ll resume work once the electricity issue is fixed.</p>
        <p className='my-3'>Fazley R. brother and Ruhi, my house has an electricity short circuit, so I can’t work right now because my laptop charge is below 10%. I’ll resume work once the electricity issue is fixed.</p>
        <h3 className='my-5 text-[18px] font-semibold'>Step 2: Explore Resources</h3>
        <p className='my-3'>Fazley R. brother and Ruhi, my house has an electricity short circuit, so I can’t work right now because my laptop charge is below 10%. I’ll resume work once the electricity issue is fixed.</p>
        <p className='my-3'>Fazley R. brother and Ruhi, my house has an electricity short circuit, so I can’t work right now because my laptop charge is below 10%. I’ll resume work once the electricity issue is fixed.</p>
        <h3 className='my-5 text-[18px] font-semibold'>Step 3: Develop a Plan</h3>
        <p className='my-3'>Fazley R. brother and Ruhi, my house has an electricity short circuit, so I can’t work right now because my laptop charge is below 10%. I’ll resume work once the electricity issue is fixed.</p>
        <p className='my-3'>Fazley R. brother and Ruhi, my house has an electricity short circuit, so I can’t work right now because my laptop charge is below 10%. I’ll resume work once the electricity issue is fixed.</p>
        <h3 className='my-5 text-[18px] font-semibold'>Step 4: Conclusion</h3>
        <p className='my-3'>Fazley R. brother and Ruhi, my house has an electricity short circuit, so I can’t work right now because my laptop charge is below 10%. I’ll resume work once the electricity issue is fixed.</p>
        <p className='my-3'>Fazley R. brother and Ruhi, my house has an electricity short circuit, so I can’t work right now because my laptop charge is below 10%. I’ll resume work once the electricity issue is fixed.</p>

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