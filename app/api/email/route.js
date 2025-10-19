import connectDB from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModule";
import { NextResponse } from "next/server";


const LoadDB = async () => {
    await connectDB();
}

LoadDB();

export async function POST(request) {
        const formData = await request.formData();
        const emailData = {
            email: `${formData.get('email')}`,
        }
        await EmailModel.create(emailData);
        return NextResponse.json({success: true, message: "Email Subscribed"})
}

export async function GET(request) {
    const emails = await EmailModel.find();
    return NextResponse.json({success: true, emails: emails})
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({success: true, message: "Email Deleted"})
}