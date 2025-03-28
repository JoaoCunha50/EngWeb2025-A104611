# TPC6 - Trabalho Prático 6 (27/03/2025)

## Informação do Aluno

- **Nome:** João Manuel Machado da Cunha
- **Nº:** A104611

![foto](https://avatars.githubusercontent.com/u/131183584?v=4)

## Resumo

Este projeto, realizado no âmbito da UC de Engenharia Web, consiste num serviço de consulta de contratos públicos que utiliza uma API de dados MongoDB. O sistema é composto por duas partes principais:

1. **API de Dados (MongoDB + Express)**
   - Base de dados com informações sobre contratos públicos
   - Endpoints para consulta de contratos e entidades
   - Acesso aos dados através de operações CRUD

2. **Interface Web (Express + Pug)**
   - Página principal com lista de todos os contratos
   - Páginas individuais para cada contrato
   - Páginas de entidades mostrando todos os seus contratos
   - Interface responsiva usando W3.CSS

O serviço permite consultar detalhes de contratos públicos, informações sobre entidades contratantes e o valor total dos contratos por entidade.

## Funcionalidades Principais:

- Visualização de lista completa de contratos
- Consulta detalhada de contratos individuais
- Visualização de contratos por entidade
- Cálculo automático do valor total de contratos por entidade
- Navegação intuitiva entre contratos e entidades

## Lista de Resultados:

- [api](api)
- [appContratos](appContratos)

## Utilização:

1. Iniciar o servidor de dados:
   ```sh
    docker start mongoEW
    cd api
    npm start
   ```

2. Iniciar a interface web (em outro terminal):
   ```sh
   cd appContratos
   npm start
   ```

3. Aceder à interface web:
   ```
   http://localhost:16001
   ```

## Rotas Disponíveis:

- `GET /` - Página principal com lista de contratos
- `GET /contratos/:id` - Página de detalhes de um contrato específico
- `GET /entidades/:nipc` - Página com todos os contratos de uma entidade

## Tecnologias Utilizadas:

- Node.js
- Express
- Pug (Template Engine)
- MongoDB
- W3.CSS
