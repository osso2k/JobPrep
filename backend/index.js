import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import router from './routes/authRoutes.js'
import { authMiddleware } from './middleware/authMiddleware.js'


dotenv.config()


const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())

await connectDB()

app.get("/protected", authMiddleware, (req, res) => {
    res.send("its running")
})

app.use('/api', router)

app.listen(PORT, () => { console.log(`App is running on http://localhost:${PORT}`) })