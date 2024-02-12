const express = require("express");
const router =  express.Router();
const {verifyToken} = require('../../Middleware/fireBase/Auth');
const {createNote,getNote,getNotes,deleteNote} = require('../../Controllers/Notes/NotesController');

router.post('/getNotes',verifyToken,getNotes);
router.post('/createNote',verifyToken,createNote);
router.put('/deleteNote',verifyToken,deleteNote);
router.put('/getNote',verifyToken,getNote);

module.exports = router;