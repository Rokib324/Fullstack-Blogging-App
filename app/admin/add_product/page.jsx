"use client"

import { assets } from '@/assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

    const [image, setImage] = useState(false);

    const [data, setData] = useState({
        title: '',
        description: '',
        category: 'startup',
        author: 'MD ROKIBUL ISLAM',
        author_img: '/rokib.jpeg'
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData({...data, [name]: value});
        console.log(data);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        formData.append('author_img', data.author_img);
        formData.append('image', image);
        const response = await axios.post('/api/blog', formData);
        if(response.data.success){
            toast.success(response.data.message);
            setImage(false);
            setData({
                title: '',
                description: '',
                category: 'startup',
                author: 'MD ROKIBUL ISLAM',
                author_img: '/rokib.jpeg'
            });
        }else{
            toast.error(response.data.message);
        }
    }
  return (
    <>
    <form className='pt-5 px-5 sm:pt-12 sm:pl-16' onSubmit={onSubmitHandler}>
        <p className='text-xl'>Upload Thumbnail</p>
        <label htmlFor="image">
            <Image className='mt-4 cursor-pointer' src={!image?assets.upload_area:URL.createObjectURL(image)} width={100} height={90} alt="upload" />
        </label>
        <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
        <p className='text-xl mt-4'>Blog Title</p>
        <input type="text" name='title' onChange={onChangeHandler} value={data.title} placeholder='Enter Blog Title' className='w-full sm:w-[500px] border border-black px-4 py-3 mt-4' required />
        
        <p className='text-xl mt-4'>Blog Description</p>
        <textarea type="text" name='description' onChange={onChangeHandler} value={data.description} placeholder='Enter Blog Description. NB: use HTML tags for formatting, like <p></p>,<h1></h1>...' className='w-full sm:w-[500px] border border-black px-4 py-3 mt-4' required />
        
        <p className='text-xl mt-4'>Blog Category</p>
        <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 mt-4 py-3 px-4 sm:w-[200px] border border-black text-gray-500' required>
            <option value="technology">Technology</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="startup">Startup</option>
        </select>
        <br />
        <button type='submit' className='mt-6 bg-black text-white px-4 py-3'>Add</button>
    </form>
    </>
  )
}

export default page