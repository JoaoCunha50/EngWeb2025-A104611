const http = require("http");
const axios = require("axios");
const url = require("url");

http.createServer((req, res) => {
    if (req.method === "GET") {
        if (req.url === "/reparacoes") {
            axios.get("http://localhost:3000/reparacoes")
                .then((response) => {
                    var reparacoes = response.data;
                    res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
                    res.write("<h1>Reparações</h1>");
                    res.write("<ul>")
                    reparacoes.forEach((reparacao) => {
                        res.write(`<li>`);
                        res.write(`Nome: ${reparacao.nome} <br>`);
                        res.write(`Nif: ${reparacao.nif} <br>`);
                        res.write(`Data: ${reparacao.data}<br>`);
                        const codigosIntervencoes = reparacao.intervencoes.map(i => i.codigo).join(',');
                        res.write(`<a href="/intervencoes/${codigosIntervencoes}">Ver todas as intervenções</a><br>`);
                        res.write(`<a href="/viaturas/${reparacao.viatura.matricula}">Ver Viatura</a>`);
                        res.write("</li>");
                        res.write(`<hr style="border: 0; height: 2px; background-color: #ccc; margin: 10px 0px;">`);
                    });
                    res.write("</ul>")
                    res.end();
                })
                .catch((error) => {
                    res.writeHead(500, { "Content-Type": "text/html;charset=UTF-8" });
                    console.log(error);
                    res.end();
                });
        }
        else if (req.url.match("/intervencoes/")) {
            const codigos = req.url.split("/")[2].split(",");
            
            Promise.all(codigos.map(codigo => 
                axios.get(`http://localhost:3000/intervencoes?codigo=${codigo}`)
                    .catch(error => ({ data: [] }))
            ))
            .then(responses => {
                const intervencoes = responses
                    .flatMap(response => response.data);
                
                res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
                res.write("<h1>Intervenções de Reparação</h1>");
                res.write("<ul>");
                intervencoes.forEach((intervencao) => {
                    res.write(`<li>Código: ${intervencao.codigo}</li>`);
                    res.write(`<li>Data: ${intervencao.nome}</li>`);
                    res.write(`<li>Descrição: ${intervencao.descricao}</li>`);
                    res.write("<br>");
                });
                res.write("</ul>");
                res.write('<a href="/reparacoes">Voltar para Reparações</a>');
                res.end();
            })
            .catch((error) => {
                res.writeHead(500, { "Content-Type": "text/html;charset=UTF-8" });
                console.log(error);
                res.end();
            });
        }
        else if (req.url.match(/\/viaturas\/[A-Z0-9]{1,2}-[A-Z0-9]{1,2}-[A-Z0-9]{1,2}/)) {
            var matricula = req.url.split("/")[2];

            axios.get(`http://localhost:3000/viaturas?matricula=${matricula}`)
                .then((response) => {
                    var viatura = response.data[0];
                    res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
                    res.write("<h1>Viaturas de Reparação</h1>");
                    res.write("<ul>")
                    res.write("<li>")
                    res.write(`Marca: ${viatura.marca} <br>`)
                    res.write(`Modelo: ${viatura.modelo}<br>`)
                    res.write(`Matrícula: ${viatura.matricula} <br>`)
                    res.write("</li>")
                    res.write("</ul>")
                    res.write('<a href="/reparacoes">Voltar para Reparações</a>');
                    res.end();
                })
                .catch((error) => {
                    res.writeHead(500, { "Content-Type": "text/html;charset=UTF-8" });
                    console.log(error);
                    res.end();
                });
        }
        else {
            res.writeHead(404, { "Content-Type": "text/html;charset=UTF-8" });
            res.write("<p>Recurso não encontrado</p>\n");
            res.end()
        }
    }
    else {
        res.writeHead(405, { "Content-Type": "text/html;charset=UTF-8" });
        res.write("<p>Método não permitido!</p>\n");
        res.end()
    }
}).listen(1234);
