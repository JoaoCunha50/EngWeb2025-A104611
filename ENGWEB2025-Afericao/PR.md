# Documentação da API de Livros

## Instruções de Configuração

### Pré-requisitos
- Node.js (v14 ou superior)
- MongoDB instalado e em execução
- Gestor de pacotes npm ou yarn

### Configuração da Base de Dados
1. Iniciar o serviço MongoDB:
```bash
sudo systemctl start mongodb
```

2. A aplicação irá criar automaticamente uma base de dados chamada `bookDB` no primeiro arranque

### Configuração da Aplicação
1. Clonar o repositório
2. Instalar dependências:
```bash
npm install
```
3. Iniciar a aplicação:
```bash
npm start
```
O servidor iniciará em `http://localhost:3000`

## Implementação da Persistência de Dados

### Estrutura da Base de Dados
A aplicação utiliza MongoDB como base de dados com o seguinte esquema para livros:
- bookId (String): Identificador único
- title (String): Título do livro
- author (String): Autor do livro
- publishDate (Date): Data de publicação
- pages (Number): Número de páginas
- coverImg (String): URL da imagem de capa

### Endpoints da API
- GET /books - Listar todos os livros
- GET /books/:id - Obter livro específico
- POST /books - Criar novo livro
- PUT /books/:id - Atualizar livro
- DELETE /books/:id - Eliminar livro

### Implementação das Vistas
A aplicação utiliza templates Pug para renderizar as vistas:
- layout.pug: Template base
- index.pug: Vista da lista de livros
- livro.pug: Vista individual do livro

## Tratamento de Erros
A aplicação implementa tratamento de erros para:
- IDs de livro inválidos
- Campos obrigatórios em falta
- Erros de conexão com a base de dados
- Formatos de pedido inválidos
