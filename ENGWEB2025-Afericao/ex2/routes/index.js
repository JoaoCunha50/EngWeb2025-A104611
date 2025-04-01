var express = require('express');
var axios = require('axios');
var router = express.Router();

router.get('/', function(req, res, next) {
  axios.get('http://localhost:17000/books')
    .then(function(response) {
      res.render('index', { slist: response.data });
    })
    .catch(function(error) {
      res.render('error', { error: error });
    });
});

router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:17000/books/' + req.params.id)
    .then(function(response) {
      res.render('livro', { livro: response.data });
    })
    .catch(function(error) {
      res.render('error', { error: error });
    });
});

module.exports = router;
