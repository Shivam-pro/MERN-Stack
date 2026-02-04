import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    content : {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},{timestamps: true});

export const note = mongoose.model("Note", noteSchema);