# 📝 Blog Pessoal API

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![Render](https://img.shields.io/badge/Render-000000?style=for-the-badge&logo=render&logoColor=white)

## 💡 Descrição

API REST desenvolvida durante o bootcamp da Generation Brasil com foco em boas práticas de desenvolvimento back-end, organização em camadas e documentação de endpoints.


## 🚀 Tecnologias utilizadas

* JavaScript
* TypeScript
* Node.js
* NestJS
* TypeORM
* MySQL
* Swagger
* Render (deploy)

## 📚 Funcionalidades

* Cadastro de usuários
* Autenticação (login)
* CRUD completo de postagens
* Relacionamento entre usuários e posts
* Validação de dados

## 📄 Documentação da API

A documentação dos endpoints foi feita utilizando o Swagger, permitindo testar as rotas diretamente pelo navegador.

## 🌐 Deploy

A aplicação foi publicada utilizando o Render, permitindo acesso remoto à API.

## 🏗️ Arquitetura

O projeto segue a arquitetura em camadas do NestJS:

* **Controller** → define as rotas
* **Service** → contém a lógica de negócio
* **Entity** → representa as tabelas do banco de dados
* **Repository** → comunicação com o banco via TypeORM

## ▶️ Como rodar o projeto

```bash
# Clonar repositório
git clone https://github.com/yguidella/blogpessoal

# Entrar na pasta
cd blogpessoal

# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run start:dev
```

## 🗄️ Banco de dados

Configure um banco MySQL e ajuste as credenciais no projeto (arquivo de configuração do TypeORM).

## 📌 Objetivo

Projeto desenvolvido para prática de construção de APIs REST, utilizando boas práticas e ferramentas modernas do ecossistema Node.js.
