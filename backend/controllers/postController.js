import { Post } from "../models/Post.js"

export const postMessage = async (req, res) => {
    const { content, role } = req.body
    try {
        const post = new Post({
            content,
            role,
        })
        await post.save()
        res.status(201).json({ message: "Post created", post })
    } catch (error) {
        res.json({ message: "Error in posting" }, error).status(501)
    }
}