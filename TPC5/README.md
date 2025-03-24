# TPC5 - Trabalho Prático 5 (10/03/2024)

- **Nome:** João Manuel Machado da Cunha
- **Nº:** A104611

![foto](https://avatars.githubusercontent.com/u/131183584?v=4)

## Resumo
Este projeto implementa uma aplicação web para gestão de tarefas utilizando uma arquitetura baseada em Node.js e Express. A aplicação permite criar, visualizar, editar e apagar tarefas, com suporte a diferentes níveis de prioridade e datas limite.

#### Componentes Principais:
 - **Express Framework**: Utilizado para criar o servidor web e gerir rotas
 - **MongoDB**: Base de dados NoSQL para armazenamento das tarefas
 - **Mongoose**: ODM (Object Data Modeling) para MongoDB
 - **Views em ExpressJS**: Sistema de templates para geração dinâmica de páginas

## Listagem de ficheiros

#### **Lista de dependências/módulos**:
- [apiAlunos](apiAlunos) - API dados
- [appAlunos](appAlunos) - Aplicação Alunos

## Utilização:
1. Iniciar o MongoDB:
   ```sh
   mongod
   ```

2. Instalar dependências e iniciar o servidor:
   ```sh
   npm install
   npm start
   ```

3. Abrir o browser e navegar para:
   ```
   http://localhost:3000
   ```

4. A partir daí, poderá utilizar a interface web para gerir as tarefas.

## Notas técnicas:
- O servidor corre na porta 3000
- Requer MongoDB instalado e em execução
- Utiliza Express 4.x
- Templates EJS para renderização das views
