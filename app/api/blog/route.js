
import connectDB from "@/lib/config/db"
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";

// Connect to the database
const LoadDB = async () => {
    await connectDB()
}
LoadDB();

// API endpoint to get all blogs
async function GET(request) {

    const blogs = await BlogModel.find();   

    return NextResponse.json({blogs})
}

// API endpoint to uploading a new blog
async function POST(request) {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl = `/${timestamp}_${image.name}`;

    // Create a new blog
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
    return NextResponse.json({success: true, message: "Blog created successfully"})
}

export { GET, POST }