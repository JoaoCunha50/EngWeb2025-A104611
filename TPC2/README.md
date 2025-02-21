# TPC2 - Trabalho Prático semana 2 (19/02/2024)

- **Nome:** João Manuel Machado da Cunha
- **Nº:** A104611
- **Foto:**

![foto](https://avatars.githubusercontent.com/u/131183584?v=4)

## Resumo
Este projeto foi desenvolvido no âmbito da UC de Engenharia Web e implementa um servidor HTTP que disponibiliza informações sobre uma escola de música. O sistema permite consultar alunos, cursos e instrumentos através de uma interface web. O servidor processa dados de um ficheiro JSON e apresenta-os em páginas HTML formatadas com W3.CSS.
Foi necessário corrigir os IDs dos cursos suplementares no db.json.

#### Componentes Principais:
 - **Servidor HTTP**: Implementado em Node.js, gere pedidos GET para visualização de alunos, cursos e instrumentos.
 - **Páginas Dinâmicas**: Sistema de geração de páginas HTML que apresenta os dados de forma organizada e estilizada.
 - **Interface Web**: Sistema de navegação intuitivo com tabelas interativas e detalhes individuais para cada elemento.
 - **Gestão de Dados**: Utilização do json-server para disponibilizar os dados através de uma API REST.

## Listagem de ficheiros

#### **Lista de dependências/módulos**:
- [package.json](package.json)
- [package-lock.json](package-lock.json)

#### **Lista de Resultados (ficheiros de implementação)**: 
   - [server.js](server.js)
   - [mypages.js](mypages.js)
   - [db.json](db.json)

## Utilização:
 - Iniciar o json-server:
    ```sh
    json-server --watch db.json
    ```
 - Em outro terminal, iniciar o servidor:
    ```sh
    npm i
    node server.js
    ```
 - Abrir o browser e navegar até:
    ```sh
    localhost:7777
    ```
 - De seguida terá ao seu dispor a interface web para consulta dos dados da escola de música.
#
   Navegue à vontade!