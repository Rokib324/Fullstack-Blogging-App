const { NextResponse } = require("next/server")
import connectDB from "@/lib/config/db"
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";


const LoadDB = async () => {
    await connectDB()
}
LoadDB();

async function GET(request) {
    return NextResponse.json({message: "API is working"})
}

async function POST(request) {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl = `/${timestamp}_${image.name}`;

    const blogdata = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        author_img: `${formData.get('author_img')}`,
        image: `${imgUrl}`,
        date: `${timestamp}`
    }

    await BlogModel.create(blogdata);
    console.log('Blog created successfully');
    return NextResponse.json({success: true, message: "Blog created successfully"})
}

export { GET, POST }