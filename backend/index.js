import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import router from './routes/authRoutes.js'
import { authMiddleware } from './middleware/authMiddleware.js'
import cors from 'cors'
import { allPosts, getPost, myPosts, postMessage } from './controllers/postController.js'

dotenv.config()


const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    exposedHeaders: ['Authorization']
}))

await connectDB()

app.post("/post", authMiddleware, postMessage)
app.get('/', authMiddleware, getPost)
app.get('/myposts', authMiddleware, myPosts)
app.get('/explore', authMiddleware, allPosts)

app.use('/api', router)

app.listen(PORT, () => { console.log(`App is running on http://localhost:${PORT}`) })