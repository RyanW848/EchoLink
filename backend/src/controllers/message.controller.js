import User from "../models/user.model.js"
import Message from "../models/message.model.js"
import cloudinary from "../lib/cloudinary.js";

export const getUsers = async (res, req) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsers", error.message);
        res.staus(500).json({ error: "Internal server error" });
    }
};

// Finds all messages between sender and receiver
export const getMessages = async (res, req) => {
    try {
        const { id:userToChatId } = req.params;
        const senderId = req.user_id;
        
        const meessages = await Message.find({
            $or:[
                {senderId: senderId, receiverId: userToChatId},
                {senderId: userToChatId, receiverId: senderId}
            ]
        })

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages", error.message);
        res.staus(500).json({ error: "Internal server error" });
    }
};

export const sendMessage = async (req, res) => {
    try {
        const { text, image } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let imageURL;
        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageURL = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageURL,
        });

        await newMessage.save();

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage", error.message);
        res.staus(500).json({ error: "Internal server error" });
    }
};