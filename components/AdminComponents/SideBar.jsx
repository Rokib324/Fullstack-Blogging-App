import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const SideBar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
      <div className='px-2 sm:pl-14 py-3 border border-black'>
        <Image src={assets.logo} alt='logo' width={120}/>
      </div>
      <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
        <div className='w-[50%] sm:w-[80%] absolute right-0'>
        <Link href='/admin/add_product' className='flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-solid border-black shadow-[-5px_5px_0px_#494949] hover:shadow-[-5px_5px_0px_#000000] transition-all duration-300'>
          <Image src={assets.add_icon} alt='' width={28}/> <p>Add Blog</p>
        </Link>
        <Link href='/admin/blogList' className='mt-5 flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-solid border-black shadow-[-5px_5px_0px_#494949] hover:shadow-[-5px_5px_0px_#000000] transition-all duration-300'>
          <Image src={assets.blog_icon} alt='' width={28}/> <p>Blog List</p>
        </Link>
        <Link href='/admin/subscriptions' className='mt-5 flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-solid border-black shadow-[-5px_5px_0px_#494949] hover:shadow-[-5px_5px_0px_#000000] transition-all duration-300'>
          <Image src={assets.email_icon} alt='' width={28}/> <p>Subscription</p>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default SideBar