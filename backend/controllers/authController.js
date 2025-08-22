import express from 'express'
import { User } from '../models/User.js'
import bcrypt from 'bcrypt'
import { generateToken } from '../middleware/authMiddleware.js'


export const signup = async (req, res) => {
    try {
        const { email, password, username } = req.body

        const hashedPassword = await bcrypt.hash(password, 6)

        const user = new User({
            username,
            email,
            password: hashedPassword
        })
        await user.save()

        const token = generateToken(user, req, res)

        res.json({
            message: "User created",
            token,
            user
        })
        console.log(user)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) { return res.status(404).json({ message: "User not found" }) }

        const comparePassword = await bcrypt.compare(password, user.password)
        if (!comparePassword) { return res.status(400).json({ message: "Invalid credentials" }) }

        const token = generateToken(user, req, res)

        res.json({
            message: "You are now logged in",
            token,
            user
        })
    } catch (error) {
        console.log(error.message)
    }
}
