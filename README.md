# Desafio 01 - Criando um projeto do zero

<p align="center">
<img alt="ReactJS Rocketseat" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc2fd7c29-54f4-45c2-95fa-b9fa269109b8%2Freactjs.png?table=block&id=51e4099a-6e2f-4d4b-ae94-f9fe75bb769d&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=250&userId=&cache=v2" width="200" hspace="50" align="center"/>
<img alt="Desafio 01 - Criando um projeto do zero" src="./src/assets/logo.png" align="center"/>

</p>

<br>

<p align="center"><em>Confira o resultado do desafio em: <a href="https://spacetraveling-rocketseat-vitor.vercel.app" target="_blank">spacetraveling-rocketseat-vitor.vercel.app</a></em></p>

## :computer: Sobre o desafio

<hr>

Nesse desafio, você deverá criar uma aplicação para treinar o que aprendeu até agora no ReactJS

Essa será uma aplicação onde o seu principal objetivo é criar um blog do zero. Você vai receber uma aplicação praticamente em branco que deve consumir os dados do Prismic e ter a interface implementada conforme o layout do Figma. Você terá acesso a diversos arquivos para implementar:

- Estilizações global, comun e individuais;
- Importação de fontes Google;
- Paginação de posts;
- Cálculo de tempo estimado de leitura do post;
- Geração de páginas estáticas com os métodos `getStaticProps` e `getStaticPaths`;
- Formatação de datas com `date-fns`;
- Uso de ícones com `react-icons`;
- Requisições HTTP com `fetch`;
- Entre outros.

A seguir veremos com mais detalhes o que e como precisa ser feito 🚀

## Layout da Aplicação

<div>
  <p>Home</p>
  <img src="./src/assets/home.png" width="600" />
   <p>Post</p>
  <img src="./src/assets/post.png" width="600" />
</div>

## Imagens

<div>
   <p>Home</p>
   <img src="./src/assets/image-1.png" width="500" />
   <p>Post</p>
   <img src="./src/assets/image-2.png" width="500" />
</div>

## :rocket: Techs

<ul>
  <li> ReactJS </li>
  <li> TypeScript </li>
  <li> Next.js </li>
  <li> React Icons </li>
  <li> Prismic </li>
  <li> Sass </li>
</ul>

## Desenvolvimento

---

### Pré-requisitos

- Instalar [Node.js](https://nodejs.org)

- Instalar [Yarn](https://yarnpkg.com/)

### Clone o repositório

```bash
$ git@github.com:vitorgaletti/ignite-reactjs-spacetraveling.git
```

### Executar Projeto

```bash
# Mudar para directório
$ cd ignite-reactjs-spacetraveling/
```

- Instalar dependências

```bash
$ yarn
```

```bash
# Crie um arquivo .env.local e configure as váriaveis de ambiente
# Stripe
PRISMIC_API_ENDPOINT=
PRISMIC_ACESS_TOKEN=
```

- Execute

```bash
$ yarn dev
```

```bash
$ yarn build
```

- Executar scripts

|          Ação          |  Utilização  |
| :--------------------: | :----------: |
|   Iniciar o servidor   |  `yarn dev`  |
|    Executar testes     | `yarn test`  |
| Compilar para produção | `yarn build` |

Acesse <http://localhost:3000> para ver o resultado.
