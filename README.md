# 💱 Conversor de Moedas

Este projeto é um conversor de moedas completo, desenvolvido com **HTML**, **CSS**, **JavaScript puro** no front-end e **Node.js (Express)** no back-end. O layout é inspirado em um projeto do Figma da [Rocketseat](https://figma.com/@rocketseat).

---

## ✨ O que o projeto faz

- Permite ao usuário inserir um valor para conversão entre moedas.
- Oferece seleção dinâmica das moedas de origem e destino, sempre atualizada conforme o backend.
- Realiza conversão real utilizando taxas de câmbio obtidas de uma API pública.
- Exibe a taxa de câmbio atual e o valor convertido de forma clara e destacada.
- Possui interface moderna, responsiva e com tema escuro, proporcionando uma ótima experiência visual.
- Inclui feedbacks visuais e mensagens de erro para garantir usabilidade.

---

## 🧪 Tecnologias utilizadas

- HTML5  
- CSS3  
- JavaScript  
- Node.js + Express  
- Google Fonts: Inter e Monomaniac One  
- [AwesomeAPI](https://docs.awesomeapi.com.br/api-de-moedas) para taxas de câmbio

---

## 🚀 Como executar

1. **Pré-requisitos:**  
   - [Node.js](https://nodejs.org/) instalado

2. **Instalação:**  
   Clone o repositório e instale as dependências:
   ```bash
   git clone https://github.com/seu-usuario/conversor-de-moedas.git
   cd conversor-de-moedas
   npm install
   ```

3. **Execução:**  
   Inicie o servidor:
   ```bash
   node server.js
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## 🎨 Créditos de design

Layout baseado no projeto disponível no perfil da [Rocketseat no Figma](https://figma.com/@rocketseat).  
A interface foi adaptada para fins educacionais e prática de desenvolvimento front-end.

---

## 📝 Observações

- Para adicionar ou remover moedas, edite o array no endpoint `/currencies` do arquivo `server.js`.
- O backend Express serve os arquivos estáticos e faz a integração com a API de câmbio.
- Todo o código foi escrito do zero, com atenção especial à estilização nativa dos elementos HTML.

---

## 📁 Estrutura do projeto

```
ConversorDeMoedas/
│ server.js
│ package.json
└── src/
    ├── index.html
    ├── style.css
    ├── script.js
    └── imgs/
```
