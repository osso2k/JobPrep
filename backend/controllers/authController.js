import express from 'express'
import { User } from '../models/User.js'
import bcrypt from 'bcrypt'

export const signup = async (req, res) => {
    try {
        const { email, password } = req.body

        const hashedPassword = bcrypt.hash(password, 6)

        const user = User({
            email,
            password: hashedPassword
        })
        user.save()
        res.send("User created")
        console.log(user)
    } catch (error) {
        console.log(error.message)
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body

    } catch (error) {
        console.log(error.message)
    }
}
