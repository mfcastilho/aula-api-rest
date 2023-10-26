
# Aula API REST -  Programa Intercâmbio iFood

Este é um projeto prático, guiado por mim, e desenvolvido como parte das aulas de revisão de API REST para o projeto intercâmbio iFood desenvolvido pela Cubos Academy. O projeto segue a arquitetura em camadas e tem como objetivo criar uma API REST para gerenciar clientes em um banco de dados chamado 'aula_api_rest'. O sistema oferece operações básicas de CRUD (Create, Read, Update, Delete) para clientes.

## Sobre o programa Intercâmbio iFood

Programa realizado pelo Time de Comunidade junto com o Time de Experiência do Estudante B2B da Cubos Academy com a finalidade de estabelecer conexões entre as turmas do iFood e reforçar o aprendizado ensinado nas aulas. Os estudantes interessados em reforçar o ensino de algum tema do curso se tornam guias de grupos de até 10 participantes no período de segunda à quarta das 18h às 19h.  

## Arquitetura em Camadas

O projeto segue a arquitetura em camadas para manter o código organizado e separar as responsabilidades. Aqui está uma visão geral das camadas:

- **Controllers (Controladores)**: Responsável por receber as informações de uma requisição HTTP e retornar uma resposta. Controla o fluxo da aplicação.

- **Routes (Rotas)**: Gerencia as rotas da API, mapeando as URLs para as funções do controlador correspondentes.

- **Services (Serviços)**: Lida com a lógica de negócios da aplicação, aplicando regras e processamento de dados.

- **Repository (Repositórios)**: Responsável por fazer as requisições ao banco de dados 'aula_api_rest' para persistência e recuperação de dados.

- **Configs (Configurações)**: Lida com as configurações do banco de dados e outras configurações necessárias da aplicação.

- **Middlewares (Intermediários)**: Realiza validações e verificações intermediárias para garantir a segurança e a integridade dos dados.

## Fluxograma
  ![Minha Imagem](https://github.com/mfcastilho/aula-api-rest/blob/master/docs/fluxo-arquitetura-em-camadas.png)


## Endpoints da API

A API oferece os seguintes endpoints para gerenciar produtos:

- **CRIAR UM CLIENTE**: 
  - Método HTTP: POST
  - Rota: /cliente
  - Cria um novo produto no banco de dados.

- **EDITAR UM CLIENTE**: 
  - Método HTTP: PUT
  - Rota: /cliente/{id}
  - Edita um produto específico com base no ID fornecido.

- **EXCLUIR UM CLIENTE**: 
  - Método HTTP: DELETE
  - Rota: /cliente/{id}
  - Remove um produto específico com base no ID fornecido.

- **LISTAR TODOS OS CLIENTES**:
  - Método HTTP: GET
  - Rota: /clientes
  - Retorna uma lista de todos os produtos no banco de dados.

- **LISTAR UM CLIENTE ESPECÍFICO**:
  - Método HTTP: GET
  - Rota: /clientes/{id}
  - Retorna informações sobre um produto específico com base no ID fornecido.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Postgres
- dotenv
- nodemon

## Configuração do Banco de Dados

- Antes de executar o projeto, certifique-se de criar o banco de dados 'aula_api_rest'e criar as tabelas do banco de dados. Os scripts de criação do banco de dados e da tabela está no arquivo dump.sql que se encontra dentro da pasta database. A pasta database se encontra dentro da pasta configs.
- Certifique-se de configurar o banco de dados. Para inserir as informações de configuração do banco de dados, crie um arquivo .env tendo como modelo o arquivo .env.example e lá insira as informações necessárias para acessar o seu banco de dados local.

## Executando o Projeto

Siga estas etapas para executar o projeto em seu ambiente local:

1. Clone este repositório: `git clone https://github.com/seu-usuario/aula-api-rest.git`
2. Instale as dependências: `npm install`
3. Configure as informações do banco de dados no arquivo de configuração.
4. Inicie o servidor: `npm run dev`
5. Acesse a API em `http://localhost:3000`


## Material de Estudos
- <a href="https://mf-programacao.notion.site/API-REST-2e64be29aa3f43218757bd8c6e1474f0?pvs=25">Link</a>

## Contribuindo

- Contribuições são bem-vindas! Se você deseja contribuir para o projeto, siga as diretrizes de contribuição e envie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](https://github.com/mfcastilho/aula-api-rest/blob/master/LICENSE) para obter detalhes.

## Contato

Para dúvidas ou mais informações, entre em contato com a equipe de desenvolvimento:

- Nome do Desenvolvedor: Mario Frederico Castilho
- Email: fredericocastilho@hotmail.com

Obrigado por usar o projeto Aula de API REST!

