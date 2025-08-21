import { Posts } from "../models/Post.js"

export const postMessage = async (req, res) => {
    const { content, role } = req.body
    try {
        const post = new Posts({
            content,
            role,
        })
        post.save()
        res.status(201).json({ message: "Post created" })
    } catch (error) {
        res.json({ message: "Error in posting" }).status(501)
    }
}