import React, { useState } from 'react'
import { blog_data } from '@/assets/assets'
import BlogItem from './BlogItem'
const BlogList = () => {

    const [menu, setMenu] = useState('All')


  return (
    <div>
    <div className='flex justify-center gap-6 my-10'>
        <button onClick={() => setMenu('All')} className={menu==="All" ? `bg-black text-white px-4 py-1` : ""}>All</button>
        <button onClick={() => setMenu('Lifestyle')} className={menu==="Lifestyle" ? `bg-black text-white px-4 py-1` : ""}>Lifestyle</button>
        <button onClick={() => setMenu('Startup')} className={menu==="Startup" ? `bg-black text-white px-4 py-1` : ""}>Startup</button>
        <button onClick={() => setMenu('Technology')} className={menu==="Technology" ? `bg-black text-white px-4 py-1` : ""}>Technology</button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blog_data.filter((blog) => {
                if (menu === 'All') return blog
                return blog.category === menu
            }).map((blog) => (
                <BlogItem key={blog.id} {...blog} />
            ))}
        </div>
    </div>
  )
}

export default BlogList