import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
    const { fullName, email, password } = req.body
    try {
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "You must fill out all fields"});
        }
        /**
         * Checks if the password satisfies all of the following requirements
         * -Has a length of 8 or more characters
         * -Has a capital letter
         * -Has a lowercase letter
         * -Has a number
         */
        if ( password.length < 8 || 
            !(/[A-Z]/.test(password)) || 
            !(/[a-z]/.test(password)) || 
            !(/[0-9]/.test(password))
        ) {
            return res.status(400).json({ message: "Password does not satisfy all requirements" });
        }

        const user = await User.findOne({ email });

        if (user) return res.status(400).json({ message: "Email already belongs to an account "});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        });

        if (newUser) {
            generateToken(newUser._id, res);
            await newUser.save();
            res.status(201).json({ 
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        console.log("Error in signup", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const login = (req, res) => {
    
};

export const logout = (req, res) => {
    
};

