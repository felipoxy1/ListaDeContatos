# 📇 ContactList

Uma aplicação web desenvolvida com **React**, **TypeScript** e **Redux** para gerenciar uma lista de contatos. Com ela, é possível adicionar, editar e remover contatos, com persistência local via **localStorage**.

## 🔍 Visão Geral

O **ContactList** é uma aplicação SPA simples e eficiente para controle de contatos, criada com foco em organização de código, componentização e uso de boas práticas com o ecossistema moderno do React.

---

## 🚀 Funcionalidades

- 📌 Adicionar novo contato com nome, e-mail e número
- ✏️ Editar informações de contatos existentes
- ❌ Remover contatos da lista
- 💾 Salvamento automático com `localStorage`
- 🧭 Navegação entre páginas com `React Router DOM`
- 🎨 Estilização com `styled-components`

---

## 🧰 Tecnologias Utilizadas

- [React 19](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/)
- [Styled-Components](https://styled-components.com/)
- [Vite](https://vitejs.dev/)
- ESLint + Prettier + Husky + Lint-Staged

---

## 📁 Estrutura de Pastas

```
src/
├── components/          # Componentes reutilizáveis (Title, ListaDeContatos)
├── containers/          # Containers principais (ex: EditContact)
├── pages/               # Páginas da aplicação (Home, Cadastro)
├── store/               # Redux store + reducers
├── styles/              # Estilos globais com styled-components
└── App.tsx              # Configuração de rotas e provider
```

---

## 🖥️ Como rodar o projeto

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/contactlist.git
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o projeto**

```bash
npm run dev
```

4. Acesse no navegador: `http://localhost:5173`

---

## 💡 Melhorias futuras (sugestões)

- Validação de e-mail e número com regex
- Responsividade para dispositivos móveis
- Integração com backend e autenticação
- Adição de testes unitários com Jest + RTL

---

## 🧑‍💻 Desenvolvido por

Luiz Albuquerque  
[GitHub](https://github.com/felipoxy1) • [LinkedIn](https://linkedin.com/in/felipoxy1)
