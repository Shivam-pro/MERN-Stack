import { note, } from "../models/notesModel.js";

// get all notes
const getNote = async(req, res) => {
    // const userId = req.body.userId;
    const user = req.user;
    // console.log("userId",userId)
    try {
        const notes = await note.find({userId: user});
        res.json({success: true, notes});
    } catch (error) {
        console.log(": getnotes", error);
        res.json({success: false, message: "Error in getting note"});
    }
}

// Add a note
const addNote = async(req, res) => {
    const {title, content, category} = req.body;
    const userId = req.user;
    const newNote = new note({
        userId: userId,
        title: title,
        content: content,
        category: category
    })
    try {
        await newNote.save();
        res.json({success: true, newNote, message: "Note Added Successfully!"});
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "server error: Cannot add your note"});
    }
}
// Remove a note
const removeNote = async(req, res) =>{
    const {id} = req.body;
    try {
        const deleteNote = await note.findByIdAndDelete(id);
        if(!deleteNote){
            res.json({success: false, message: "Note not Found"});
        }
        res.json({success: true, message: "Note Deleted Successfully!"});
    } catch (error) {
        res.json({success: false, message: "Server Error: Cannot delete your note"});
    }

}

//update a note
const updateNote = async(req, res)=>{
    const {id, title, content, category} = req.body;
    try {
        const updatenote = await note.findByIdAndUpdate(id, {title, content, category}, {new: true});
        if(!updatenote){
            res.json({success: false, message: "Note not found"});
        }
        await res.json({success: true, message: "Note Updated Successfully!"});
    } catch (error) {
        res.json({success: false, message: "Server Error: Cannot update your note"});
    }

}

export {addNote, getNote, removeNote, updateNote};