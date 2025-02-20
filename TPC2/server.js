import axios from 'axios';
import { createServer } from 'http';
import { getMainPage, getRepPage, getIntervPage, getMarcasPage } from './mypages.js';
import { readFile } from 'fs';

const server = createServer(function (req, res) {
    var d = new Date().toISOString().substring(0, 16);
    console.log(req.method + " " + req.url + " " + d);

    if(req.url == "/"){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(getMainPage(d));
        res.end();
    }else if(req.url == ("/reps")){
        axios.get("http://localhost:3000/reparacoes")
            .then(resp => {
                var reps = resp.data;
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.write(getRepPage(reps, null, d));
                res.end();
            })
            .catch(error => {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                console.log(error);
                res.write("<p>Erro: " + error + "</p>");
                res.end();
            });
    }else if(req.url == ("/interv")){
        axios.get("http://localhost:3000/tipos_intervencao")
            .then(resp => {
                var reps = resp.data;
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.write(getIntervPage(reps, d));
                res.end();
            })
            .catch(error => {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                console.log(error);
                res.write("<p>Erro: " + error + "</p>");
                res.end();
            });
    }else if(req.url == ("/marcas")){
        axios.get("http://localhost:3000/marcas")
            .then(resp => {
                var reps = resp.data;
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.write(getMarcasPage(reps, d));
                res.end();
            })
            .catch(error => {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                console.log(error);
                res.write("<p>Erro: " + error + "</p>");
                res.end();
            });
    }else if(req.url.match(/\/marcas\/[a-zA-Z%0-9]+$/)){
        var marca = req.url.split('/')[2]
        marca = marca.replace('%20', ' ')
        
        axios.get(`http://localhost:3000/reparacoes?viatura.marca=${marca}`)
            .then(resp => {
                var reps = resp.data;
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.write(getRepPage(reps, marca, d));
                res.end();
            })
            .catch(error => {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
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

server.listen(3017);

console.log("Listening to PORT - 3017");