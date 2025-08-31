import jwt from 'jsonwebtoken'
import { User } from '../models/User.js'


export const generateToken = (user, req, res) => {
    try {
        const token = jwt.sign({ username: user.username, id: user._id }, process.env.JWT_SECRET, { expiresIn: "5h" })
        return token
    } catch (error) {
        console.log(error.message)
        res.json({ message: "Error in generating token" })
    }
}

export const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: "No token provided" })
        }

        const token = authHeader.split(' ')[1]

        if (!token) {
            return res.status(401).json({ message: "No token provided" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.id).select('-password');
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        req.user = user
        return next()
    } catch (error) {
        console.error("JWT Error:", error.message);
        return res.status(401).json({ message: "Invalid or expired token" })
    }

}