import jwt from 'jsonwebtoken'
import { User } from '../models/User.js'


export const generateToken = (user, req, res) => {
    try {
        const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
        return token
    } catch (error) {
        console.log(error.message)
        res.json({ message: "Error in generating token" })
    }
}

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization
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