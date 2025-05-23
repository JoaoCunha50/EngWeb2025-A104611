var http = require('http')
var axios = require('axios')
const { parse } = require('querystring');

var pages = require('./pages')
var static = require('./static.js')

// Aux functions
function collectRequestBodyData(request, callback) {
    if(request.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}

// Server creation

var alunosServer = http.createServer((req, res) => {
    // Logger: what was requested and when it was requested
    var d = new Date().toISOString().substring(0, 16)
    console.log(req.method + " " + req.url + " " + d)

    // Handling request
    if(static.staticResource(req)){
        static.serveStaticResource(req, res)
    }
    else{
        switch(req.method){
            case "GET":
                if(req.url == "/"){
                    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                    res.write(pages.mainPage(d))
                    res.end()
                }
                // GET /alunos --------------------------------------------------------------------
                else if(req.url == "/alunos"){
                    axios.get("http://localhost:3000/alunos?_sort=nome&_order=asc")
                        .then(response => {
                            var alunos = response.data
                            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write(pages.studentsListPage(alunos, d))
                            res.end()
                        })
                        .catch(function(erro){
                            res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write(pages.errorPage(erro, d))
                            res.end()
                        })
                }
                // GET /alunos/:id --------------------------------------------------------------------
                else if(req.url.match(/\/alunos\/A[0-9]+/)){
                    var id = req.url.split("/")[2]
                    axios.get("http://localhost:3000/alunos/" + id)
                        .then(response => {
                            var aluno = response.data
                            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write(pages.studentPage(aluno, d))
                            res.end()
                        })
                        .catch(function(erro){
                            res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write(pages.errorPage(erro, d))
                            res.end()
                        })
                }
                // GET /alunos/registo --------------------------------------------------------------------
                else if(req.url == "/alunos/registo"){
                    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                    res.write(pages.studentFormPage(d))
                    res.end()
                }
                // GET /alunos/edit/:id --------------------------------------------------------------------
                else if(req.url.match(/\/alunos\/edit\/A[0-9]+/)){
                    var id = req.url.split("/")[3]
                    axios.get("http://localhost:3000/alunos/" + id)
                        .then(response => {
                            var aluno = response.data
                            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write(pages.studentFormEditPage(aluno, d))
                            res.end()
                        })
                        .catch(function(erro){
                            res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write(pages.errorPage(erro, d))
                            res.end()
                        })
                }
                // GET /alunos/delete/:id --------------------------------------------------------------------
                else if(req.url.match(/\/alunos\/delete\/A[0-9]+/)){
                    var id = req.url.split("/")[3]
                    axios.delete("http://localhost:3000/alunos/" + id)
                        .then(response => {
                            res.writeHead(302, {'Location': '/alunos'})
                            res.end()
                        })
                        .catch(function(erro){
                            res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write(pages.errorPage(erro, d))
                            res.end()
                        })
                }
                // GET ? -> Lancar um erro
                else {
                    res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'})
                    res.write(pages.errorPage({error: "Erro: " + req.url + " nao encontrado..."}, d))
                    res.end()
                }
                break;
            case "POST":
                // POST /alunos/registo --------------------------------------------------------------------
                if(req.url == "/alunos/registo"){
                    collectRequestBodyData(req, result => {
                        axios.post("http://localhost:3000/alunos", result)
                            .then(response => {
                                alunos = response.data;
                                res.writeHead(302, {'Location': '/alunos'})
                                res.end()
                            })
                            .catch(function(erro){
                                res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'})
                                res.write(pages.errorPage(erro, d))
                                res.end()
                            })
                    })
                }
                // POST /alunos/edit/:id --------------------------------------------------------------------
                else if(req.url.match(/\/alunos\/edit\/A[0-9]+/)){
                    var id = req.url.split("/")[3]
                    collectRequestBodyData(req, result => {
                        axios.put("http://localhost:3000/alunos/" + id, result)
                            .then(response => {
                                res.writeHead(302, {'Location': '/alunos'})
                                res.end()
                            })
                            .catch(function(erro){
                                res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'})
                                res.write(pages.errorPage(erro, d))
                                res.end()
                            })
                    })
                }
                // POST ? -> Lancar um erro
                else {
                    res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'})
                    res.write(pages.errorPage({error: "Erro: " + req.url + " nao encontrado..."}, d))
                    res.end()
                }
                break;
            default: 
                res.writeHead(405, {'Content-Type': 'text/html;charset=utf-8'})
                res.write(pages.errorPage({error: "Erro: " + req.method + " nao suportado..."}, d))
                res.end()
        }
    }
})

alunosServer.listen(7777, ()=>{
    console.log("Servidor à escuta na porta 7777...")
})



