var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
router.get('/:idAutor', function(req, res, next) {
    axios.get('http://localhost:17000/books/' + req.params.idAutor)
});

module.exports = router;
