import jwt from 'jsonwebtoken'


export const generateToken = (user, req, res) => {
    try {
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" })
        return token
    } catch (error) {
        console.log(error.message)
        res.json({ message: "Error in generating token" })
    }
}

export const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        return next()
    } catch (error) {
        console.error("JWT Error:", error.message);
        return res.status(401).json({ message: "Invalid or expired token" })
    }

}