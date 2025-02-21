import axios from 'axios';
import { createServer } from 'http';
import { getMainPage, getAlunosPage, getAlunoPage, getCursosPage, getInstPage} from './mypages.js';
import { readFile } from 'fs';

const server = createServer(function (req, res) {
    var d = new Date().toISOString().substring(0, 16);
    console.log(req.method + " " + req.url + " " + d);

    if(req.url == "/"){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(getMainPage(d));
        res.end();
    }else if(req.url == ("/alunos")){
        axios.get("http://localhost:3000/alunos")
            .then(resp => {
                var alunos = resp.data;
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.write(getAlunosPage(alunos, null, d));
                res.end();
            })
            .catch(error => {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                console.log(error);
                res.write("<p>Erro: " + error + "</p>");
                res.end();
            });
    }else if(req.url.match(/alunos\/A\d+/)){
        var id = req.url.split("/")[2];
        axios.get(`http://localhost:3000/alunos/${id}`)
            .then(resp => {
                var aluno = resp.data;
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.write(getAlunoPage(aluno, d));
                res.end();
            })
            .catch(error => {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                console.log(error);
                res.write("<p>Erro: " + error + "</p>");
                res.end();
            });
    }else if(req.url == ("/cursos")){
        axios.get("http://localhost:3000/cursos")
            .then(resp => {
                var cursos = resp.data;
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.write(getCursosPage(cursos, d));
                res.end();
            })
            .catch(error => {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                console.log(error);
                res.write("<p>Erro: " + error + "</p>");
                res.end();
            });
        }else if(req.url.match(/cursos\/C[A-Z]\d+/)){
            var id = req.url.split("/")[2];
            axios.get(`http://localhost:3000/cursos/${id}`)
                .then(resp => {
                    var curso = resp.data;
                    axios.get(`http://localhost:3000/alunos?curso=${curso.id}`)
                    .then(resp => {
                        var alunos = resp.data;
                        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                        res.write(getAlunosPage(alunos, curso, d));
                        res.end();
                    })
                    .catch(error => {
                        res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
                        console.log(error);
                        res.write("<p>Erro: " + error + "</p>");
                        res.end();
                    })
                })
                .catch(error => {
                    res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
                    console.log(error);
                    res.write("<p>Erro: " + error + "</p>");
                    res.end();
                });
    }else if(req.url == ("/inst")){
        axios.get("http://localhost:3000/instrumentos")
            .then(resp => {
                var reps = resp.data;
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.write(getInstPage(reps, d));
                res.end();
            })
            .catch(error => {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                console.log(error);
                res.write("<p>Erro: " + error + "</p>");
                res.end();
            });
        }else if(req.url.match(/inst\/I\d+/)){
            var id = req.url.split("/")[2];
            axios.get(`http://localhost:3000/instrumentos/${id}`)
                .then(resp => {
                    var instrumento = resp.data;
                    axios.get(`http://localhost:3000/alunos?instrumento=${instrumento['#text']}`)
                    .then(resp => {
                        var alunos = resp.data;
                        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                        res.write(getAlunosPage(alunos, instrumento, d));
                        res.end();
                    })
                    .catch(error => {
                        res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
                        console.log(error);
                        res.write("<p>Erro: " + error + "</p>");
                        res.end();
                    })
                })
                .catch(error => {
                    res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
                    console.log(error);
                    res.write("<p>Erro: " + error + "</p>");
                    res.end();
                });
    }else if(req.url.match(/w3\.css$/)){
        readFile('w3.css', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/css; charset=utf-8'});
            if(err){
                res.write("ERRO: na leitura do ficheiro :: " + err);
            }
            else{
                res.write(data);
            }
            res.end();
        });
    }else if(req.url.match(/favicon\.ico$/)){
        readFile('definicoes.png', function(err, data) {
            res.writeHead(200, {'Content-Type': 'image/.png'});
            if(err){
                res.write("ERRO: na leitura do ficheiro :: " + err);
            }
            else{
                res.write(data);
            }
            res.end();
        });
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        res.end("<p>Recurso não suportado: " + req.url + "</p>");
    }
});

server.listen(7777);

console.log("Listening to PORT - 7777");