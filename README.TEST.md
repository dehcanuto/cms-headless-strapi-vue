# 🧪 Teste Técnico - André Canuto - Desenvolvedor(a) Fullstack
![Version](https://img.shields.io/badge/1.0.0-beta?label=version)


## ⚠️ Instruções Importantes

- Este teste é **confidencial** e não deve ser compartilhado ou divulgado publicamente.
- Você terá **até 5 dias** para completá-lo a partir do recebimento.
- Ao finalizar:
  - Publique o repositório como **privado** no GitHub.
  - Adicione `renan.bessa@melhorplano.net` como colaborador.
  - Responda o e-mail de envio informando a conclusão.

---

## 🎯 Objetivo

Avaliar sua capacidade de desenvolver uma aplicação web fullstack simples, incluindo:

- Montagem do ambiente.
- Consumo de um CMS headless.
- Criação de uma API intermediária (BFF).
- Escrita de testes unitários.

---

## 💻 Desafio

Criar uma aplicação web que:

- Liste conteúdos vindos de um CMS headless.
- Permita a **criação de posts** via uma API própria.

---

## ✅ Requisitos Funcionais

- [ ] Listar posts cadastrados no CMS na **página inicial**.
- [ ] Exibir **título**, **data de publicação** e **resumo** de cada post.
- [ ] Criar uma **página de detalhes** do post (título, conteúdo e data de publicação).
- [ ] Criar uma **página com formulário** para cadastro de novos posts:
  - Campos: título, resumo, conteúdo.
- [ ] Implementar **pesquisa por título** dos posts.
- [ ] Criar uma **API** para cadastrar novos posts no CMS escolhido.

---

## ⚙️ Requisitos Técnicos

### 🔧 Back-end

- Utilize **Strapi** ou **WordPress (modo headless)** como CMS.
- Configure **Docker** para subir CMS e front-end juntos.
- Crie uma **API intermediária (BFF)** entre o front e o back para o cadastro dos posts.

### 🖥️ Front-end

- Utilize **Astro.js** ou **Next.js**.
- Linguagem: **TypeScript**.
- Utilize **React** com componentes funcionais e hooks.
- Implemente uma **gerência de estado simples**.
- **SEO:** O conteúdo dos posts deve estar presente no HTML renderizado (SSR ou SSG).

### 🧪 Testes

- Pelo menos **dois testes unitários**:
  - ✅ Um para a **API** (ex: criação de post).
  - ✅ Um para um **componente do front-end** (ex: listagem de posts ou formulário).
- **Cobertura de testes acima de 80%** é um diferencial (não obrigatório).

---

## 📄 Documentação

- Adicione este `README.md` com **instruções claras de como rodar a aplicação**.
- O **deploy é opcional**, mas conta como bônus.

---

## 📝 O que será Avaliado

- ✅ Aplicação funcional e aderente aos requisitos.
- ✅ Código organizado, modular e de fácil entendimento.
- ✅ Uso de boas práticas de desenvolvimento.
- ✅ Histórico de **commits claros e frequentes**.
- ✅ Testes implementados e funcionais.
- ✅ Clareza no raciocínio e abordagem na resolução do problema.

> ⚡ **Dica:** Evite fazer um único commit gigante. Prefira commits menores e bem descritos.

---

## 🚀 Boa sorte!

**"O que não te desafia, não te transforma!"**
