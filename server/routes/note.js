import express from 'express'
import Note from '../models/Note';

const router  = express.Router()

router.post("/add", async (req ,res) => {

    try{
        const { title, description } = req.body;

        const newNote = new Note({
            title,
            description
        })

        await newNote.save();
        return res.status(200).json({success: true, message: "Note Successfully Added" });
    }catch(error){
        console.log(error.message)
        return res.status(500).json({success: false, message: "Error in Adding Note" });
    }
})

router.get("/", async (req ,res) => {

    try{
        const notes = await Note.find()
        return res.status(200).json({success: true, notes });
    }catch(error){
        console.log(error.message)
        return res.status(500).json({success: false, message: "Error in Retriving Notes" });
    }
})

router.put("/:id", async (req ,res) => {

    try{
        const { id } = req.params;

        const updateNote = await Note.findByIdAndUpdate(id, req.body)
        return res.status(200).json({success: true, updateNote });
    }catch(error){
        console.log(error.message)
        return res.status(500).json({success: false, message: "Error in Updating Note" });
    }
})

router.delete("/:id", async (req ,res) => {

    try{
        const { id } = req.params;

        const deleteNote = await Note.findByIdAndDelete(id)
        return res.status(200).json({success: true, deleteNote });
    }catch(error){
        console.log(error.message)
        return res.status(500).json({success: false, message: "Error in Deleting Note" });
    }
})
export default router;