export function getMainPage(data) {
    var pagHTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Escola de Música</title>
                <meta charset="utf-8"/>
                <link rel="stylesheet" type="text/css" href="w3.css"/>
                <link rel="icon" type="image/x-icon" href="favicon.ico"/>
            </head>
            <body>
                <div class="w3-card-4">
                    <header class="w3-container w3-purple">
                        <h1>Consultas</h1>
                    </header>
                    <div class="w3-container">
                        <ul class = "w3-ul">
                            <li><a href="/alunos">Lista de Alunos</a></li>
                            <li><a href="/cursos">Lista de Cursos</a></li>
                            <li><a href="/inst">Lista de Instrumentos</a></li>
                        </ul>
                    </div>

                    <footer class="w3-container w3-purple">
                        <h5>Gerado na aula de ENGWEB ${data}</h5>
                    </footer>
                </div>
            </body>
        </html>
    `;
    return pagHTML;
}

export function getAlunosPage(lista, curso, data) {
    var pagHTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Escola de Música</title>
                <meta charset="utf-8"/>
                <link rel="stylesheet" type="text/css" href="w3.css"/>
                <link rel="icon" type="image/x-icon" href="favicon.ico"/>
                <style>
                    .clickable {
                        transition: all 0.3s ease;
                    }
                    .clickable:hover {
                        background-color:rgb(211, 184, 144) !important;
                        color: white;
                        transform: scale(1.01);
                    }
                </style>
                <script>
                    window.onload = function() {
                        var rows = document.getElementsByClassName('clickable');
                        for(var i = 0; i < rows.length; i++) {
                            rows[i].addEventListener('click', function() {
                                window.location.href = this.dataset.href;
                            });
                            rows[i].style.cursor = 'pointer';
                        }
                    }
                </script>
            </head>
            <body>
                <div class="w3-card-4">
                    <header class="w3-container w3-orange w3-text-white">
                        <h1>Lista de Alunos ${curso == null ? '' : `- ${curso.designacao == null ? `${curso['#text']}` : `${curso.designacao}`}`}</h1>
                    </header>
                    <div class="w3-container">
                        <table class="w3-table-all">
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Data</th>
                                <th>Curso</th>
                                <th>Ano Curso</th>
                                <th>Instrumento</th>
                            </tr>`;
    lista.forEach((a) => {
        pagHTML += ` 
                                <tr class="clickable" data-href="/alunos/${a.id}">
                                    <td>${a.id}</td>
                                    <td>${a.nome}</td>
                                    <td>${a.dataNasc}</td>
                                    <td>${a.curso}</td>
                                    <td>${a.anoCurso}</td>
                                    <td>${a.instrumento}</td>
                                </tr>`;
    });

    pagHTML += `
                        </table>
                    </div>

                    <footer class="w3-container w3-orange w3-text-white">
                        <h5>Gerado para o TPC2 de ENGWEB ${data}</h5>
                    </footer>
                </div>
            </body>
        </html>
    `;
    return pagHTML;
}

export function getAlunoPage(aluno, data) {
    var pagHTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Escola de Música</title>
                <meta charset="utf-8"/>
                <link rel="stylesheet" type="text/css" href="w3.css"/>
                <link rel="icon" type="image/x-icon" href="favicon.ico"/>
            </head>
            <body>
                <div class="w3-card-4">
                    <header class="w3-container w3-blue">
                        <h1>Aluno - ${aluno.id}</h1>
                    </header>
                    <div class="w3-container">
                        <p>Nome: ${aluno.nome}</p>
                        <p>Data de Nascimento: ${aluno.dataNasc}</p>
                        <p>Curso: ${aluno.curso}</p>
                        <p>Ano do Curso: ${aluno.anoCurso}</p>
                        <p>Instrumento: ${aluno.instrumento}</p>
                    </div>

                    <footer class="w3-container w3-blue">
                        <h5>Gerado na aula de ENGWEB ${data}</h5>
                    </footer>
                </div>
            </body>
        </html>
    `;
    return pagHTML;
}

export function getCursosPage(lista, data) {
    var pagHTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Escola de Música</title>
                <meta charset="utf-8"/>
                <link rel="stylesheet" type="text/css" href="w3.css"/>
                <link rel="icon" type="image/x-icon" href="favicon.ico"/>
                <style>
                    .clickable {
                        transition: all 0.3s ease;
                    }
                    .clickable:hover {
                        background-color:rgb(53, 65, 66) !important;
                        color: white;
                        transform: scale(1.01);
                    }
                </style>
                <script>
                    window.onload = function() {
                        var rows = document.getElementsByClassName('clickable');
                        for(var i = 0; i < rows.length; i++) {
                            rows[i].addEventListener('click', function() {
                                window.location.href = this.dataset.href;
                            });
                            rows[i].style.cursor = 'pointer';
                        }
                    }
                </script>
            </head>
            <body>
                <div class="w3-card-4">
                    <header class="w3-container w3-gray">
                        <h1>Lista de Cursos</h1>
                    </header>
                    <div class="w3-container">
                        <table class="w3-table-all">
                            <tr>
                                <th>Id</th>
                                <th>Designação</th>
                                <th>Duração</th>
                                <th>Id Instrumento</th>
                                <th>Nome Instrumento</th>
                            </tr>`;
    lista.forEach((c) => {
        pagHTML += ` 
                                <tr class="clickable" data-href="/cursos/${c.id}">
                                    <td>${c.id}</td>
                                    <td>${c.designacao}</td>
                                    <td>${c.duracao}</td>
                                    <td>${c.instrumento.id}</td>
                                    <td>${c.instrumento['#text']}</td>
                                </tr>`;
    });

    pagHTML += `
                        </table>
                    </div>

                    <footer class="w3-container w3-gray">
                        <h5>Gerado para o TPC2 de ENGWEB ${data}</h5>
                    </footer>
                </div>
            </body>
        </html>
    `;
    return pagHTML;
}

export function getInstPage(lista, data) {
    var pagHTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Escola de Música</title>
                <meta charset="utf-8"/>
                <link rel="stylesheet" type="text/css" href="w3.css"/>
                <link rel="icon" type="image/x-icon" href="favicon.ico"/>
                <style>
                    .clickable {
                        transition: all 0.3s ease;
                    }
                    .clickable:hover {
                        background-color:rgb(199, 255, 207) !important;
                        color: white;
                        transform: scale(1.01);
                    }
                </style>
                <script>
                    window.onload = function() {
                        var rows = document.getElementsByClassName('clickable');
                        for(var i = 0; i < rows.length; i++) {
                            rows[i].addEventListener('click', function() {
                                window.location.href = this.dataset.href;
                            });
                            rows[i].style.cursor = 'pointer';
                        }
                    }
                </script>
            </head>
            <body>
                <div class="w3-card-4">
                    <header class="w3-container w3-green">
                        <h1>Lista de Instrumentos</h1>
                    </header>
                    <div class="w3-container">
                        <table class="w3-table-all">
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                            </tr>`;
    lista.forEach((i) => {
        pagHTML += ` 
                                <tr class="clickable" data-href="/inst/${i.id}">
                                    <td>${i.id}</td>
                                    <td>${i['#text']}</td>
                                </tr>`;
    });

    pagHTML += `
                        </table>
                    </div>

                    <footer class="w3-container w3-green">
                        <h5>Gerado para o TPC2 de ENGWEB ${data}</h5>
                    </footer>
                </div>
            </body>
        </html>
    `;
    return pagHTML;
}
