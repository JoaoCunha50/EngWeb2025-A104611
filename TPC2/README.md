# TPC1 - Trabalho Prático semana 1 (12/02/2024)

- **Nome:** João Manuel Machado da Cunha
- **Nº:** A104611
- **Foto:**

![foto](https://avatars.githubusercontent.com/u/131183584?v=4)

## Resumo
Este projeto foi desenvolvido no âmbito da UC de Engenharia Web e implementa um servidor HTTP que disponibiliza informações sobre reparações de viaturas. O sistema permite consultar reparações, intervenções e viaturas através de uma interface web simples. Inclui também um script Python para processar e reorganizar os dados do ficheiro JSON original, tornando assim viável a utilização do novo json no contexto do json server.

#### Componentes Principais:
 - **Servidor HTTP**: Implementado em Node.js, gere pedidos GET para visualização de reparações, intervenções e viaturas.
 - **Processador de Dados**: Script Python que extrai e organiza dados de intervenções e viaturas do conjunto de dados original, para permitir a criação de um json server.
 - **Interface Web**: Sistema de navegação HTML com links para visualizar detalhes de reparações, intervenções associadas e informações de viaturas.
 - **Gestão de Dados**: Utilização do json-server para disponibilizar os dados através de uma API REST.

## Listagem de ficheiros

#### **Lista de dependências/módulos**:
- [package.json](package.json)
- [package-lock.json](package-lock.json)

#### **Lista de Resultados (ficheiros de implementação)**: 
   - [jsonScript.py](jsonScript.py)
   - [dataset_reparacoes.json](dataset_reparacoes.json)
   - [new_dataset.json](new_dataset.json)
   - [server.js](server.js)

## Utilização:
 - Abrir o browser e navegar até:
    ```sh
    localhost:1234
    ```
 - De seguida terá ao seu dispor a API de consulta dos dados do json server na interface.
#
   Navegue á vontade!