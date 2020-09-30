## Configuração de Variaveis de Ambiente

São compostas por 3 arquivos .env: **development.env**, **homologacao.env**, **production.env** os quais são acessados no arquivo **server.js**, a qual recebe por **NODE_ENV** qual ambiente a aplicação se encontra.

dentro dos arquivos de configuração temos:
**PORT**: Referente a porta exposta pela api.
**API_RECIPE**: Referente a BASE_URL do recipepuppy.
**API_GIPHY** : Referente a BASE_URL do GIPHY.
**API_GIPHY_TOKEN**: Referente ao token do GIPHY para requisição de novos gifs.

## Inicialização da Aplicação.

com o terminal na pasta raiz da aplicação executar os seguintes comandos para rodar em docker:

**Build da Imagem do docker:**
`docker build -t api-recipe .`.

**Executar a Imagem do docker:**
`docker run --name api-recipe -p 3333:3333 api-recipe`.

caso não tenha docker executar os seguintes comandos na pasta raiz do projeto:

**Instalação de dependências**
`npm install` ou `yarn install`.

**Inicialização da Aplicação**
Para desenvolvimento: `npm run dev` ou `yarn dev`.
Para Produção: `npm run start` ou `yarn start`.

## Requisição da Aplicação.

Requisição para a receita GET: `http://localhost:3333/recipes/?i=tomato,onion`.
