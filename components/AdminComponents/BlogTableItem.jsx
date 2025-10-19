import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({title, author, author_img, image, date, deleteBlog, mongoId}) => {

    const BlogDate = new Date(date)


  return (
    <tr className='bg-white border-b '>
        <th scope='row' className='px-6 py-4 font-medium text-gray-900 items-center whitespace-nowrap hidden sm:flex gap-4'>
            <Image src={author_img?author_img:'/rokib.jpeg'} alt='blog' width={20} height={20} />
            <p>{author?author:'no author'}</p>
        </th>
        <td className='px-6 py-4'>{title?title:'no title'}</td>
        <td className='px-6 py-4'>{BlogDate.toDateString()}</td>
        <td onClick={() => deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer'>
            x
        </td>
    </tr>
  )
}
export default BlogTableItem