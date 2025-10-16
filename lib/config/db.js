import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://BloggerApp:jFZvj1hSIA4i2RLC@cluster0.5wvab66.mongodb.net/blogger');

    console.log("Connected to MongoDB");
}

export default connectDB;