# TPC3 - Student Management System (25/02/2024)

- **Nome:** João Manuel Machado da Cunha
- **Nº:** A104611
![foto](https://avatars.githubusercontent.com/u/131183584?v=4)

## Resumo
Este projeto implementa um sistema de gestão de alunos desenvolvido no âmbito da UC de Engenharia Web. O sistema permite visualizar, adicionar, editar e remover informações sobre alunos, incluindo seus dados pessoais e estado dos TPCs. A interface web foi construída utilizando W3.CSS para estilização.

#### Componentes Principais:
 - **Servidor HTTP**: Implementado em Node.js, gerencia pedidos GET, POST e PUT para manipulação dos dados dos alunos
 - **API REST**: Utilização do json-server para disponibilizar e gerir os dados dos alunos
 - **Páginas Dinâmicas**: Sistema de geração de páginas HTML com funcionalidades CRUD
 - **Interface Web**: Sistema de navegação intuitivo com formulários e tabelas interativas

## Listagem de ficheiros

#### **Lista de dependências/módulos**:
- [package.json](package.json) - Configuração do projeto e dependências
- [static.js](static.js) - Módulo para servir recursos estáticos
- [pages.js](pages.js) - Templates das páginas HTML
- [app.js](app.js) - Servidor principal e gestão de rotas
- [alunos.json](alunos.json) - Base de dados dos alunos
- [script.py](script.py) - Script para converter CSV para JSON
- [alunos.csv](alunos.csv) - Dados originais dos alunos em CSV

## Funcionalidades:
- Listagem de todos os alunos
- Visualização detalhada de cada aluno
- Adição de novos alunos
- Edição de dados de alunos existentes
- Remoção de alunos
- Gestão do estado dos TPCs

## Utilização:
1. Iniciar o json-server:
   ```sh
   json-server --watch alunos.json
   ```

2. Em outro terminal, iniciar o servidor da aplicação:
   ```sh
   npm install
   node app.js
   ```

3. Abrir o browser e navegar para:
   ```
   http://localhost:7777
   ```

4. A partir daí, poderá utilizar a interface web para gerir os dados dos alunos.

## Notas técnicas:
- O servidor corre na porta 7777
- A API json-server corre na porta 3000
- Os recursos estáticos (CSS, imagens) são servidos da pasta 'public'