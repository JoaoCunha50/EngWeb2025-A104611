exports.mainPage = function(d){
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="jcr-favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Student Management</title>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-teal">
                    <h1>Gestão de Alunos</h1>
                </header>
        
                <div class="w3-container w3-padding-16">
                    <a href="/alunos"><b>Lista de Alunos</b></a>
                </div>
                <footer class="w3-container w3-teal">
                    <h5>Generated by EngWeb2025 in ${d}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
}


exports.studentsListPage = function(slist, d){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="jcr-favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Student Management</title>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-teal">
                    <h1>Students List
                    <a class="w3-btn w3-round w3-grey" href="/alunos/registo">+</a>
                    </h1>
                    
                </header>
        
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th><th>Name</th><th>GitLink</th>
                            <th>Actions</th>
                        </tr>
                `
    for(let i=0; i < slist.length ; i++){
        pagHTML += `
                <tr>
                    <td>${slist[i].id}</td>
                    <td>
                        <a href="/alunos/${slist[i].id}">
                            ${slist[i].nome}
                        </a>
                    </td>
                    <td>${slist[i].gitlink}</td>
                    <td>
                        [<a href="/alunos/edit/${slist[i].id}">Edit</a>][<a href="/alunos/delete/${slist[i].id}">Delete</a>]
                    </td>
                </tr>
        `
    }

    pagHTML += `
            </table>
            </div>
                <footer class="w3-container w3-teal">
                    <h5>Generated by EngWeb2025 in ${d}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}


exports.studentFormPage = function(d){
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="jcr-favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Student Form</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h2>Student Form</h2>
                </header>
            
                <form class="w3-container" method="POST">
                    <fieldset>
                        <legend>Metadata</legend>
                        <label>Id</label>
                        <input class="w3-input w3-round" type="text" name="id"/>
                        <label>Name</label>
                        <input class="w3-input w3-round" type="text" name="nome"/>
                        <label>Git</label>
                        <input class="w3-input w3-round" type="text" name="gitlink"/>
                    </fieldset>

                    <fieldset>
                        <legend>TPC</legend>
                        <input class="w3-check" type="checkbox" name="tpc1" value="1"/>
                        <label>TPC1</label>
                        <input class="w3-check" type="checkbox" name="tpc2" value="1"/>
                        <label>TPC2</label>
                        <input class="w3-check" type="checkbox" name="tpc3" value="1"/>
                        <label>TPC3</label>
                        <input class="w3-check" type="checkbox" name="tpc4" value="1"/>
                        <label>TPC4</label>
                        <input class="w3-check" type="checkbox" name="tpc5" value="1"/>
                        <label>TPC5</label>
                        <input class="w3-check" type="checkbox" name="tpc6" value="1"/>
                        <label>TPC6</label>
                        <input class="w3-check" type="checkbox" name="tpc7" value="1"/>
                        <label>TPC7</label>
                        <input class="w3-check" type="checkbox" name="tpc8" value="1"/>
                        <label>TPC8</label>
                    </fieldset>  
                    <br/>
                    <button class="w3-btn w3-purple w3-mb-2" type="submit">Register</button>
                </form>

                <footer class="w3-container w3-blue">
                    <h5>Generated by EngWeb2025 in ${d} - [<a href="/">Return</a>]</h5>
                </footer>
            
            </div>
        </body>
    </html>
    ` // Added missing closing HTML tag
}

exports.studentFormEditPage = function(a, d){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="jcr-favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Student Form</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h2>Student Form</h2>
                </header>
            
                <form class="w3-container" method="POST">
                    <fieldset>
                        <legend>Metadata</legend>
                        <label>Id</label>
                        <input class="w3-input w3-round" type="text" name="id" readonly value="${a.id}"/>
                        <label>Name</label>
                        <input class="w3-input w3-round" type="text" name="nome" value="${a.nome}"/>
                        <label>Git</label>
                        <input class="w3-input w3-round" type="text" name="gitlink" value="${a.gitlink}"/>
                    </fieldset>

                    <fieldset>
                        <legend>TPC</legend>
                    `

    for(i=1; i < 9; i++){
        var tpc = "tpc" + i
        if(tpc in a){
            pagHTML += `<input class="w3-check" type="checkbox" name="tpc${i}" value="1" checked/>
                        <label>TPC${i}</label>
                        `
        }
        else{
            pagHTML += `<input class="w3-check" type="checkbox" name="tpc${i}" value="1"/>
                        <label>TPC${i}</label>
                        `
        }
    }                

    pagHTML += `
                    </fieldset>  
                    <br/>
                    <button class="w3-btn w3-purple w3-mb-2" type="submit">Register</button>
                </form>

                <footer class="w3-container w3-blue">
                    <h5>Generated by EngWeb2025 in ${d} - [<a href="/">Return</a>]</h5>
                </footer>
            
            </div>
        </body>
    </html>
    `
    return pagHTML
}

// ---------------Student's Page--------------------------------
// Change and adapt to current dataset...
exports.studentPage = function(aluno, d ){
    var pagHTML = `
    <html>
    <head>
        <title>Aluno: ${aluno.id}</title>
        <meta charset="utf-8"/>
        <link rel="icon" href="jcr-favicon.png"/>
        <link rel="stylesheet" href="w3.css"/>
    </head>
    <body>
        <div class="w3-card-4">
            <header class="w3-container w3-teal">
                <h1>Aluno ${aluno.id}</h1>
            </header>

            <div class="w3-container">
                <ul class="w3-ul w3-card-4" style="width:50%">
                    <li><b>Nome: </b> ${aluno.nome}</li>
                    <li><b>Número: </b> ${aluno.id}</li>
                    <li><b>Git (link): </b> <a href="${aluno.gitlink}">${aluno.gitlink}</a></li>
                </ul>
            </div>
            <div class="w3-container w3-margin-8">
                <ul class="w3-ul">
            `
            for(let i=1; i < 9; i++){
                key = `tpc${i}`
                if(key in aluno){
                    pagHTML += `
                        <li><b>TPC${i}</b></li>
                    `
                }
            }
    

    pagHTML +=     `</ul></div>
            <footer class="w3-container w3-teal">
                <address>Gerado por aluno::${aluno.id} em ${d} - [<a href="/">Voltar</a>]</address>
            </footer>
        </div>
    </body>
    </html>
    `
    return pagHTML
}

// -------------- Error Treatment ------------------------------
exports.errorPage = function(errorMessage, d){
    return `
    <p>${d}: Error: ${errorMessage}</p>
    `
}