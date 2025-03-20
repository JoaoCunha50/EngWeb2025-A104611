var express = require('express');
var router = express.Router();
var Aluno = require("../controllers/alunos_controller");

router.get('/', function(req, res, next) {
    Aluno.list()
    .then(dados => res.jsonp(dados))
    .catch(error => res.jsonp(error));
});

router.get('/:id', function(req, res, next) {
  Aluno.findById(req.params.id)
  .then(dados => res.jsonp(dados))
  .catch(error => res.jsonp(error));
});

router.post('/', function(req, res, next) {
  Aluno.insert(req.body)
  .then(dados => res.jsonp(dados))
  .catch(error => res.jsonp(error));
});

router.put('/', function(req, res, next) {
  Aluno.update(req.params.id, req.body)
  .then(dados => res.jsonp(dados))
  .catch(error => res.jsonp(error));
});

router.delete('/:id', function(req, res, next) {
  Aluno.remove(req.params.id)
  .then(dados => res.jsonp(dados))
  .catch(error => res.jsonp(error));
});

module.exports = router;
