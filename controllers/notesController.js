const Note = require("../models/noteModel");
const asyncHandler = require("express-async-handler");

const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user._id });

  res.json(notes);
});

const createNotes = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    res.status(400);
    throw new Error("Please fill all required fields");
  } else {
    const note = new Note({ user: req.user._id, title, content, category });

    const createNotes = await note.save();
    res.status(201).json(createNotes);
  }
});

const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note) {
    res.json(note);
  } else {
    res.status(400).json("note not found");
  }
  res.json(note);
});

const updateNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You are not allow to perform this action");
  }

  if (note) {
    note.title = title;
    note.content = content;
    note.category = category;

    const updateNote = await note.save();
    res.json(updateNote);
  } else {
    res.status(401);
    throw new Error("Note not found");
  }
});

const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You are not allow to perform this action");
  }

  if (note) {
    await note.remove();
    res.json({ message: "note removed" });
  } else {
    res.status(401);
    throw new Error("Note not found");
  }
});
module.exports = {
  getAllNotes,
  createNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
