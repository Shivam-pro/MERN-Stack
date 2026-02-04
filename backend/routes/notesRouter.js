import express from 'express';
import { addNote, getNote, removeNote, updateNote } from '../controllers/notesController.js';
const  router = express.Router();

router.route("/addnote").post(addNote);
router.route('/getnote').get(getNote);
router.route("/removenote").post(removeNote);
router.route('/updatenote').post(updateNote);

export default router;