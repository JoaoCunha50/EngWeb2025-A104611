var express = require('express');
var router = express.Router();
const livrosController = require('../controllers/livros');

router.get('/genres', livrosController.getGenres);
router.get('/characters', livrosController.getCharacters);
router.get('/:id', livrosController.getLivroById);
router.get('/', livrosController.getAllLivros);
router.post('/', livrosController.createLivro);
router.put('/:id', livrosController.updateLivro);
router.delete('/:id', livrosController.deleteLivro);

module.exports = router;
