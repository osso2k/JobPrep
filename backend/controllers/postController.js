import { Post } from "../models/Post.js"
import { User } from "../models/User.js"
export const postMessage = async (req, res) => {
    const { content, role } = req.body
    const userId = req.user._id
    try {
        const post = new Post({
            content,
            role,
            user: userId
        })
        await post.save()

        await User.findByIdAndUpdate(
            userId,
            { $push: { posts: post._id } }
        )
        const populatedPost = await Post.findById(post._id).populate('user', 'email');
        res.status(201).json({ message: "Post created", populatedPost })
        console.log("POST creaated")
    } catch (error) {
        res.json({ message: "Error in posting" }, error).status(501)
    }
}
export const getPost = async (req, res) => {
    // const userId = req.user._id

    const posts = await Post.find().sort({ createdAt: -1 }).limit(5)
    res.json(posts)
}