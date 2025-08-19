import express from 'express'
import { User } from '../models/User.js'
import bcrypt from 'bcrypt'
import { generateToken } from '../middleware/authMiddleware.js'


export const signup = async (req, res) => {
    try {
        const { email, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 6)

        const user = new User({
            email,
            password: hashedPassword
        })
        await user.save()

        generateToken(user)

        res.send("User created")
        console.log(user)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = User.find({ email })
        if (!user) { res.send("User not found") }

        const comparePassword = bcrypt.compare(password, user.password)
        if (!comparePassword) { res.send("Wrong Info") }

        res.send("You are now logged in")
    } catch (error) {
        console.log(error.message)
    }
}
