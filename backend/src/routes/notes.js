const { Router } =  require('express');
const router = Router();

const { getNotes, createNote, updateNote, deleteNote, getOneNote } = require('../controllers/notes.controller');

router.route('/')
  .get(getNotes)
  .post(createNote)

router.route('/:id')
  .get(getOneNote)
  .put(updateNote)
  .delete(deleteNote)


module.exports = router;
