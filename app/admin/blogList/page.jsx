"use client"

import React, { useEffect, useState } from 'react'
import BlogTableItem from '@/components/AdminComponents/BlogTableItem'
import axios from 'axios'
const page = () => {

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    if(response.data.success){
      setBlogs(response.data.blogs);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);



  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1 className='text-xl font-medium mb-5'>Blog List</h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='hidden sm:block px-6 py-3'>Author Name</th>
              <th scope='col' className='px-6 py-3'>Blog Title</th>
              <th scope='col' className='px-6 py-3'>Date</th>
              <th scope='col' className='px-6 py-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item,index) =>{
              return <BlogTableItem key={index} mongoId={item._id} title={item.title} author={item.author} author_img={item.author_img} image={item.image} date={item.date} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page