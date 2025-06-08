# 🧪 Teste Técnico - André Canuto - Desenvolvedor(a) Fullstack
![Version](https://img.shields.io/badge/1.0.0-beta?label=version)
![!Strapi](https://img.shields.io/badge/Strapi-v5.15.0-purple?style=flat-square&logo=strapi)
![!Next.js](https://img.shields.io/badge/Next.js-v15.3.3-black?style=flat-square&logo=next.js)
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

- [Next.js 15](https://nextjs.org/)
- [React 19](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Hook Form](https://react-hook-form.com/)

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

## Frontend NextJS

Esta aplicação utiliza **Next.js 14**, **Tailwind CSS**, e consome a API headless do CMS Strapi.

---

## ✅ To-do

- [x] Utilize **Strapi** como CMS.
- [x] Configure **Docker** para subir CMS e front-end juntos.
- [ ] Crie uma **API intermediária (BFF)** entre o front e o back para o cadastro dos posts.
- [ ] Liste conteúdos vindos de um CMS headless.
- [ ] Permita a **criação de posts** via uma API própria.
- [x] Listar posts cadastrados no CMS na **página inicial**.
- [x] Exibir **título**, **data de publicação** e **resumo** de cada post.
- [ ] Criar uma **página de detalhes** do post (título, conteúdo e data de publicação).
- [ ] Criar uma **página com formulário** para cadastro de novos posts:
  - Campos: título, resumo, conteúdo.
- [ ] Implementar **pesquisa por título** dos posts.
- [ ] Criar uma **API** para cadastrar novos posts no CMS escolhido.
- [ ] **SEO:** O conteúdo dos posts deve estar presente no HTML renderizado (SSR ou SSG).
- [ ] Pelo menos **dois testes unitários**:
  - [ ] Um para a **API** (ex: criação de post).
  - [ ] Um para um **componente do front-end** (ex: listagem de posts ou formulário).
- [ ] **Cobertura de testes acima de 80%** é um diferencial (não obrigatório).

---