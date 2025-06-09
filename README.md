# 🧪 Teste Técnico - André Canuto - Desenvolvedor(a) Fullstack
![Version](https://img.shields.io/badge/1.0.0-beta?label=version)
![!Strapi](https://img.shields.io/badge/Strapi-v5.15.0-purple?style=flat-square&logo=strapi)
![!Next.js](https://img.shields.io/badge/Next.js-v15.3.3-black?style=flat-square&logo=next.js)
![Jest](https://img.shields.io/badge/Jest-29.7.0-C21325?style=flat-square&logo=jest&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8?style=flat-square&logo=tailwindcss&logoColor=38bdf8)

Este é um projeto para o processo seletivo da vaga Desenvolvedor(a) Fullstack. Utiliza **Strapi** como CMS headless e inclui seeds para inserir posts automaticamente.

---

## 🔧 Tecnologias usadas

- [Node.js v18+](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Backend

- [Strapi v5](https://strapi.io/) — Headless CMS open-source baseado em Node.js
- [PostgreSQL](https://www.postgresql.org/) — banco de dados relacional (pode usar SQLite em dev)
- [REST API](https://docs.strapi.io/dev-docs/api/rest) — consumo dos endpoints
- [Content Type Builder](https://docs.strapi.io/user-docs/content-type-builder) — criação visual de schemas
- [Strapi CLI](https://docs.strapi.io/dev-docs/cli/CLI) — interface de linha de comando para gerar código
- [Strapi Middleware](https://docs.strapi.io/dev-docs/backend-customization/middlewares) — personalização de requisições/respostas
- [Strapi Seed Script (custom)] — script customizado para popular o banco com conteúdo inicial


### Frontend

- [Next.js 15](https://nextjs.org/) – Framework React completo para produção, com suporte a renderização híbrida, rotas automáticas e otimizações de performance.
- [React 19](https://reactjs.org/) – Biblioteca JavaScript para construir interfaces de usuário com componentes reutilizáveis.
- [Tailwind CSS](https://tailwindcss.com/) – Framework de CSS utilitário que permite criar interfaces responsivas de forma rápida e sem sair do HTML.
- [Axios](https://axios-http.com/) – Cliente HTTP baseado em Promises para fazer requisições ao backend com facilidade.
- [React Hook Form](https://react-hook-form.com/) – Biblioteca de formulários para React que fornece uma maneira simples e eficiente de lidar com inputs, validações e estados.

## 📦 Requisitos

- **Node.js** (v18 ou superior)
- **Yarn**
- **PostgreSQL** (local ou via Docker)
- **Docker e Docker Compose** (opcional, mas recomendado)

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone git@github.com:dehcanuto/andre-canuto-fullstack-challenge-cms-headless.git
cd andre-canuto-fullstack-challenge-cms-headless
```

### 2. Instale as dependências

#### 2.1 Nextjs
```bash
cd frontend-next
yarn install
```

#### 2.2 Strapi
```bash
cd cms-strapi
yarn install
```

### 3. Variáveis de ambiente

Preferi deixar o `.env` livre no repositório para encurtar os passos para rodar o projeto =D

---

### 4. Rode a aplicação

## 🐳 Usando com Docker

Este projeto inclui um `docker-compose.yml` para rodar o **Strapi** com **PostgreSQL** e o **React** com o **NextJS** de forma simples:

```bash
docker compose up --build
```

Você pode ajustar os dados do container no `.env` e no próprio `docker-compose.yml`.

### Strapi

> A interface administrativa estará disponível em: http://localhost:1337/admin

### Frontend

> A interface do blog estará disponível em: http://localhost:3000/

---

## Strapi - CMS

## 🌱 Seeds

O DockerFile foi configurado para rodar os seeds já na montagem do container, entao não precisa rodar manualmente.

### O que o seed faz?

- Cria posts com campos como: `title`, `slug`, `description` e `content`.
- **Publica** automaticamente cada post após a criação.

### Exemplos de seed

```js
{
  title: "The Internet's Own Boy",
  slug: "the-internet-s-own-boy",
  description: "Follow the story of Aaron Swartz, the boy who could change the world",
  content: "Follow the story of Aaron Swartz, the boy who could change the world"
}
```

---

# 🧪 Rodando os Testes

Para garantir que tudo está funcionando corretamente, siga estes passos para rodar os testes do projeto:

## 1. Execute os testes
Para rodar todos os testes com Jest:

```bash
yarn test
```

## 2. Rodando os testes em modo watch (assistir alterações)

Para rodar os testes continuamente enquanto desenvolve:

```bash
yarn test --watch
```

---

## ✅ To-do

- [x] Utilize **Strapi** como CMS.
- [x] Configure **Docker** para subir CMS e front-end juntos.
- [x] Crie uma **API intermediária (BFF)** entre o front e o back para o cadastro dos posts.
- [x] Liste conteúdos vindos de um CMS headless.
- [x] Permita a **criação de posts** via uma API própria.
- [x] Listar posts cadastrados no CMS na **página inicial**.
- [x] Exibir **título**, **data de publicação** e **resumo** de cada post.
- [x] Criar uma **página de detalhes** do post (título, conteúdo e data de publicação).
- [x] Criar uma **página com formulário** para cadastro de novos posts. Campos: `título`, `resumo`, `conteúdo`.
- [x] Implementar **pesquisa por título** dos posts.
- [x] Criar uma **API** para cadastrar novos posts no CMS escolhido.
- [x] **SEO:** O conteúdo dos posts deve estar presente no HTML renderizado (SSR ou SSG).
- [x] Pelo menos **dois testes unitários**:
  - [x] Um para a **API** (ex: criação de post).
  - [x] Um para um **componente do front-end** (ex: listagem de posts ou formulário).
- [x] **Cobertura de testes acima de 80%** é um diferencial (não obrigatório).

---

## 👨‍💻 Sobre André Canuto

Sou desenvolvedor front-end desde 2016, com 9 anos de experiência. Iniciei minha carreira em agências de marketing, onde me especializei na criação de sites em WordPress e no design de landing pages otimizadas para SEO. Atualmente, atuo em ambientes de startups, contribuindo para projetos inovadores e desafiadores como front-end developer.

Tenho domínio de diversos frameworks e tecnologias, incluindo React, Angular, Vue.js, Nuxt, Next.js e Node.js. Utilizo os princípios do SOLID como base arquitetural e tenho experiência com bibliotecas de estilização como Tailwind CSS, Bootstrap e Material Design. Além disso, possuo ampla vivência com CMSs, PHP, Laravel, NestJS, MySQL, MongoDB, JavaScript e TypeScript.

Sou falante nativo de português, com proficiência B2 em inglês (First Certificate) e conhecimento básico de espanhol. Também possuo certificações em Vue.js, Angular e JavaScript pela Coodash.

Reconhecido pela criatividade, comunicação clara, dedicação, proatividade e escuta ativa, me comprometo com a entrega consistente de soluções de alta qualidade.

🔗 Me encontre por aqui:
- [Github](https://github.com/dehcanuto)
- [LinkedIn](https://www.linkedin.com/in/andre-canuto-77461b102/)
