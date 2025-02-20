export function getMainPage(data) {
    var pagHTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Oficina Automóvel</title>
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
                            <li><a href="/reps">Lista de Reparações</a></li>
                            <li><a href="/interv">Lista de Tipos de Intervenção</a></li>
                            <li><a href="/marcas">Lista de Marcas</a></li>
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

export function getRepPage(lista, marca, data) {
    var pagHTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Oficina Automóvel</title>
                <meta charset="utf-8"/>
                <link rel="stylesheet" type="text/css" href="w3.css"/>
                <link rel="icon" type="image/x-icon" href="favicon.ico"/>
            </head>
            <body>
                <div class="w3-card-4">
                    <header class="w3-container w3-purple">
                        <h1>Lista de Reparações - ${marca != null ?`${marca}`: ''}</h1>
                    </header>
                    <div class="w3-container">
                        <table class="w3-table-all">
                            <tr>
                                <th>IdRep</th>
                                <th>Nome</th>
                                <th>Data</th>
                                <th>#Intervenções</th>
                            </tr>`;
    var counter = 0;
    lista.forEach((r) => {
        counter += 1;
        pagHTML += `
                                <tr>
                                    <td>R${counter}</td>
                                    <td>${r.nome}</td>
                                    <td>${r.data}</td>
                                    <td>${r.nr_intervencoes}</td>
                                </tr>`;
    });

    pagHTML += `
                        </table>
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

export function getIntervPage(lista, data) {
    var pagHTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Oficina Automóvel</title>
                <meta charset="utf-8"/>
                <link rel="stylesheet" type="text/css" href="w3.css"/>
                <link rel="icon" type="image/x-icon" href="favicon.ico"/>
            </head>
            <body>
                <div class="w3-card-4">
                    <header class="w3-container w3-blue">
                        <h1>Lista de Intervenções</h1>
                    </header>
                    <div class="w3-container">
                        <table class="w3-table-all">
                            <tr>
                                <th>Código</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                            </tr>`;
    lista.forEach((i) => {
        pagHTML += `
                                <tr>
                                    <td>${i.codigo}</td>
                                    <td>${i.nome}</td>
                                    <td>${i.descricao}</td>
                                </tr>`;
        });

    pagHTML += `
                        </table>
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

export function getMarcasPage(lista, data) {
    var pagHTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Oficina Automóvel</title>
                <meta charset="utf-8"/>
                <link rel="stylesheet" type="text/css" href="w3.css"/>
                <link rel="icon" type="image/x-icon" href="favicon.ico"/>
            </head>
            <body>
                <div class="w3-card-4">
                    <header class="w3-container w3-green">
                        <h1>Lista de Intervenções</h1>
                    </header>
                    <div class="w3-container">
                        <table class="w3-table-all">
                            <tr>
                                <th>Marca</th>
                                <th>Modelo</th>
                            </tr>`;
    lista.forEach((m) => {
        let id = 1
        m.modelo.forEach((modelo) => {
            pagHTML += `
                            <tr>
                                <td>
                                    <a href='/marcas/${m.marca}'>
                                        ${m.marca} ${id}</td>
                                    </a>
                                <td>${modelo}</td>
                            </tr>`;
            id += 1;
        });
    });

    pagHTML += `
                        </table>
                    </div>

                    <footer class="w3-container w3-green">
                        <h5>Gerado na aula de ENGWEB ${data}</h5>
                    </footer>
                </div>
            </body>
        </html>
    `;
    return pagHTML;
}
