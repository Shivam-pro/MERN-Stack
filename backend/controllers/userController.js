import { User } from "../models/userModel.js";
import asyncHandler from 'express-async-handler';
import jwt from "jsonwebtoken";

export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.json({ success: false, message: "User Already Exists" });
        }
        const user = await User.create({
            name, email, password
        })
        const token = createToken(user._id);
        if (user) {
            return res.json({ success: true, message: "Your account is created successfully", token, user })
        }
    } catch (error) {
        return res.json({ success: false, message: "Invalid Email or password" });
    }
})

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }
        const token = createToken(user._id);
        return res.json({ success: true, token, user, message: "You Are login successfully" });
    } catch (error) {
        console.error("error: login", error);
        return res.json({ success: false, message: "Server error" });
    }
});