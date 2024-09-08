import mongoose from "mongoose";

export async function ConnectToDB() { 
    await mongoose.connect(process.env.MONGODB_URL as string)
}