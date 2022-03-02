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
router
  .route("/:id")
  .get(getNoteById)
  .put(protect, updateNote)
  .delete(protect, deleteNote);

module.exports = router;
