const express = require("express");
const {
  getAllNotes,
  createNotes,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");
const { protect } = require("../middleWares/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getAllNotes);
router.route("/create").post(protect, createNotes);
router.route("/:id");
router.route("/:id").get(getNoteById);
router.route("/:id").put(protect, updateNote);
router.route("/:id").delete(protect, deleteNote);

module.exports = router;
