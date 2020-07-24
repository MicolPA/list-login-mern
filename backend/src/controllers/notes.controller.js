const note = {};

const noteModel = require('../models/notes');

//Get All notes
note.getNotes = async (req, res) => {
    const allNotes = await noteModel.find();
    res.json(allNotes);
};

//Create a note
note.createNote = async (req, res) => {
    const { title, description, date_limit, user_id} = req.body;
    const newNote = new noteModel({
        title: title,
        description: description,
        date_limit: date_limit,
        user_id: user_id, 
    })
    await newNote.save();
    console.log(newNote);
    res.json({message: "Note Created"})
};

//Update a note
note.updateNote = async (req, res) => {
    const { title, description, date_limit} = req.body;
    await noteModel.findByIdAndUpdate(req.params.id,{
        title,
        description,
        date_limit,
    });
    res.json({message: "Note Updated"})
};

//Delete a note
note.deleteNote = async (req, res) => {
    const note = await noteModel.findByIdAndDelete(req.params.id);
    res.json({message: "Note Deleted"});
};

//Get One note by ID
note.getOneNote = async (req, res) => {
    const note = await noteModel.findById(req.params.id);
    res.json(note);
};

module.exports = note;
