import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios'
const BlogList = () => {

    const [menu, setMenu] = useState('All')

    const [blogs, setBlogs] = useState([])
    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog')
        if(response.data.success){
            setBlogs(response.data.blogs)
        }
        console.log(response.data.blogs)
    }
    useEffect(() => {
        fetchBlogs()
    }, [])

  return (
    <div>
    <div className='flex justify-center gap-6 my-10'>
        <button onClick={() => setMenu('All')} className={menu==="All" ? `bg-black text-white px-4 py-1` : ""}>All</button>
        <button onClick={() => setMenu('Lifestyle')} className={menu==="Lifestyle" ? `bg-black text-white px-4 py-1` : ""}>Lifestyle</button>
        <button onClick={() => setMenu('Startup')} className={menu==="Startup" ? `bg-black text-white px-4 py-1` : ""}>Startup</button>
        <button onClick={() => setMenu('Technology')} className={menu==="Technology" ? `bg-black text-white px-4 py-1` : ""}>Technology</button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blogs.filter((blog) => {
            if (menu === 'All') return blog
            return blog.category.toLowerCase() === menu.toLowerCase()
        }).map((blog) => (
            <BlogItem key={blog._id} id={blog._id} image={blog.image} title={blog.title} description={blog.description} category={blog.category} />
        ))}
        </div>
    </div>
  )
}

export default BlogList