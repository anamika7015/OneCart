import user from "../models/userModels.js";
import validater from "validater";
import bcrypt from "bcryptjs";
import { genToken } from "../db/token.js";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);
        const existUser = await user.findOne({ email });
        if (existUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }
        if (!validater.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid email" });
        }
        if (password.length < 8) {
            res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
        }
        const hasedPassword = await bcrypt.hash(password, 10);
        const newUser = await user.create({
            name,
            email,
            password: hasedPassword
        })
        let token = await genToken(newUser._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json(user);
    } catch (error) {
        console.log("register error");
        return res.status(500).json({message: "register error"})

    }
}