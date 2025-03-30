Automacao de Testes - Cypress

Descrição

Este repositório contém a automação de testes para o projeto QA Commerce utilizando o Cypress. O objetivo é validar os principais fluxos do sistema de e-commerce, garantindo a funcionalidade e a experiência do usuário.

Estrutura do Projeto

qa-commerce/
│-- cypress/
│   ├── e2e/
│   │   ├── tests/
│   │   │   ├── adicionarProduto.spec.js
│   │   │   ├── checkout.spec.js
│   ├── support/
│   │   ├── pages/
│   │   │   ├── ProductPage.js
│   │   │   ├── CheckoutPage.js
│   ├── fixtures/
│-- cypress.config.js
│-- package.json
│-- README.md

Cenários de Teste

Os testes automatizados cobrem os seguintes fluxos:

Adicionar Produto ao Carrinho: Verifica se o usuário pode adicionar um produto ao carrinho e se as informações aparecem corretamente.

Checkout Simples: Garante que o usuário consiga finalizar a compra, preenchendo os campos obrigatórios e escolhendo um método de pagamento.

Validação de Campos Obrigatórios: Testa se o sistema exibe mensagens de erro adequadas ao tentar finalizar a compra sem preencher os campos obrigatórios.

 Configuração e Execução

 Pré-requisitos

Node.js instalado

Git instalado

Editor de código como VS Code

Clonar o Repositório

git clone https://github.com/Keeggo-Technology-Brasil-SA/qa-commerce.git
cd qa-commerce

 Instalar as Dependências

npm install

 Executar o Projeto

npm start

Acesse o sistema em http://localhost:3000

5️⃣ Rodar os Testes Automatizados

️ Modo Interativo

npx cypress open

Selecione o teste desejado e execute.

Modo Headless (sem interface gráfica)

npx cypress run

 API Endpoints Utilizados

Os testes também validam requisições da API no /api-docs.

GET: Validação de resposta da API e status code.

POST: Validação de regras de negócio.
