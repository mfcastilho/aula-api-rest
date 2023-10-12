# Projeto Aula de API REST

Este é um projeto prático desenvolvido como parte de uma aula de API REST. O projeto segue a arquitetura em camadas e tem como objetivo criar uma API REST para gerenciar produtos em um banco de dados chamado 'aula_api_rest'. O sistema oferece operações básicas de CRUD (Create, Read, Update, Delete) para produtos.

## Arquitetura em Camadas

O projeto segue a arquitetura em camadas para manter o código organizado e separar as responsabilidades. Aqui está uma visão geral das camadas:

- **Controller**: Responsável por receber as informações de uma requisição HTTP e retornar uma resposta. Controla o fluxo da aplicação.

- **Routes**: Gerencia as rotas da API, mapeando as URLs para as funções do controlador correspondentes.

- **Services**: Lida com a lógica de negócios da aplicação, aplicando regras e processamento de dados.

- **Repository**: Responsável por fazer as requisições ao banco de dados 'aula_api_rest' para persistência e recuperação de dados.

- **Configurações**: Lida com as configurações do banco de dados e outras configurações necessárias da aplicação.

- **Middlewares**: Realiza validações e verificações intermediárias para garantir a segurança e a integridade dos dados.

## Endpoints da API

A API oferece os seguintes endpoints para gerenciar produtos:

- **CRIAR UM PRODUTO**: 
  - Método HTTP: POST
  - Rota: /api/produtos
  - Cria um novo produto no banco de dados.

- **EDITAR UM PRODUTO**: 
  - Método HTTP: PUT
  - Rota: /api/produtos/{id}
  - Edita um produto específico com base no ID fornecido.

- **EXCLUIR UM PRODUTO**: 
  - Método HTTP: DELETE
  - Rota: /api/produtos/{id}
  - Remove um produto específico com base no ID fornecido.

- **LISTAR TODOS OS PRODUTOS**:
  - Método HTTP: GET
  - Rota: /api/produtos
  - Retorna uma lista de todos os produtos no banco de dados.

- **LISTAR UM PRODUTO ESPECÍFICO**:
  - Método HTTP: GET
  - Rota: /api/produtos/{id}
  - Retorna informações sobre um produto específico com base no ID fornecido.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Banco de Dados: 'aula_api_rest'
- Outras dependências (listar as dependências relevantes)

## Configuração do Banco de Dados

Antes de executar o projeto, certifique-se de configurar o banco de dados 'aula_api_rest' e as informações de conexão no arquivo de configuração apropriado.

## Executando o Projeto

Siga estas etapas para executar o projeto em seu ambiente local:

1. Clone este repositório: `git clone https://github.com/seu-usuario/aula-api-rest.git`
2. Instale as dependências: `npm install`
3. Configure as informações do banco de dados no arquivo de configuração.
4. Inicie o servidor: `npm start`
5. Acesse a API em `http://localhost:3000`

## Contribuindo

- Contribuições são bem-vindas! Se você deseja contribuir para o projeto, siga as diretrizes de contribuição e envie um pull request.

## Licença

Este projeto está licenciado sob a Licença XYZ. Consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

## Contato

Para dúvidas ou mais informações, entre em contato com a equipe de desenvolvimento:

- Nome do Desenvolvedor: [Seu Nome]
- Email: [seu@email.com]

Obrigado por usar o projeto Aula de API REST!
# aula-api-rest
