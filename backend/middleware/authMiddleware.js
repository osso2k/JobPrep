import jwt from 'jsonwebtoken'


export const generateToken = (user, req, res) => {
    try {
        const token = jwt.sign(user, process.env.JWT_SECRET)
        res.json({ token })
    } catch (error) {
        console.log(error.message)
        res.json(error.message)
    }
}

export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorizatioon

        if (authHeader && authHeader.startsWith("Bearer ")) {
            const token = authHeader.split(' ')[1]
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET)
                req.user = decoded
                return next()
            } catch (error) {
                console.log(error.message)
            }
        }
    } catch (error) {
        console.log(error.message)
        res.json(error.message)
    }
}