# ⚽ Passa a Bola

[![Deploy with Vercel](https://vercel.com/button)](https://passa-a-bola-xi.vercel.app/)

Um projeto de plataforma web para conectar jogadoras de futebol feminino, olheiros e clubes no Brasil, dando visibilidade e criando novas oportunidades para talentos no esporte.

**Status do Projeto:** 🚀 Concluído e no ar!

## 🚀 Link para o Deploy

Você pode acessar a versão ao vivo do projeto na Vercel:

**[https://passa-a-bola-xi.vercel.app/](https://passa-a-bola-xi.vercel.app/)**

---

## ✨ Funcionalidades Principais

O projeto "Passa a Bola" é uma aplicação React completa construída com Next.js e possui as seguintes funcionalidades:

* **Páginas Estáticas e Dinâmicas:** Utiliza o App Router do Next.js para criar tanto páginas estáticas (Home, Cadastro) quanto páginas de perfil dinâmicas.
* **Consumo de API (JSON Local):** Os dados das jogadoras são carregados de um arquivo `jogadoras.json` local, simulando o consumo de uma API.
* **Roteamento Dinâmico:** A página de perfil (`/jogadora/[id]`) é gerada dinamicamente com base no `id` da jogadora na URL.
* **Filtragem em Tempo Real:** A página "Buscar Talentos" permite filtrar a lista de jogadoras por nome, posição e faixa etária, com a lista se atualizando instantaneamente (usando os hooks `useState` e `useMemo`).
* **Design 100% Responsivo:** O layout se adapta a telas de desktop e mobile, incluindo um menu "hambúrguer" funcional.
* **Formulários com Validação:** Páginas de "Cadastrar Jogadora" e "Login" com formulários controlados (React Hooks) e validação de campos.
* **Experiência de Usuário (UX):** Inclui recursos como rolagem suave (`useRef`) na página de perfil para uma navegação mais fluida.

---

## 🛠️ Tecnologias Utilizadas

* **[Next.js](https://nextjs.org/)** - Framework React para renderização (SSR/SSG) e roteamento.
* **[React](https://react.dev/)** - Biblioteca para a construção da UI, utilizando Hooks (`useState`, `useEffect`, `useMemo`, `useRef`).
* **CSS Puro** - O estilo principal do projeto foi migrado de um CSS tradicional para o `globals.css`, mantendo o design original.
* **Tailwind CSS** - Configurado e disponível no projeto (embora os estilos principais sejam CSS puro).
* **Vercel** - Para deploy e hospedagem contínua (CI/CD) a partir do GitHub.

---

## 📋 Requisitos do Projeto

Este projeto foi desenvolvido para atender aos seguintes requisitos de um checkpoint acadêmico:

* **Base em React:** Utilizar React como base do desenvolvimento.
* **Consumo de API:** Consumir uma API (neste caso, um `jogadoras.json` local).
* **Revisão do DOM e Eventos:** Criar interatividade (filtros, formulários) usando o estado do React em vez de manipulação direta do DOM.
* **Estilização:** Utilização de estilização nos componentes.
* **Normas W3C:** Código estruturado com HTML semântico.
* **Deploy:** Deploy realizado com Git + Vercel.

---

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para executar o projeto na sua máquina.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/vitorrampazzi/Passa-a-bola.git](https://github.com/vitorrampazzi/Passa-a-bola.git)
    ```

2.  **Acesse a pasta do projeto Next.js:**
    *(Importante: O projeto Next.js está na subpasta `passa-a-bola-next`)*
    ```bash
    cd Passa-a-bola/passa-a-bola-next
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  **Abra no navegador:**
    Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📸 Screenshots


**Desktop**
![Página Home do Passa a Bola no Desktop](url-para-sua-imagem-home-desktop.png)

**Mobile**
![Página Home do Passa a Bola no Celular](url-para-sua-imagem-home-mobile.png)

---

## 🧑‍💻 Autores

Projeto desenvolvido por:

* **Daniel Brito**
* **Gustavo Palomares**
* **Vitor Rampazzi**
