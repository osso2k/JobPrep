import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    content: { type: String, required: true },
    role: { type: String, required: true }
}, { timestamps: true })

export const Posts = mongoose.model("Posts", postSchema)