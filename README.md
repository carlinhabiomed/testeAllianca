# testeAllianca

Repositório de testes e2eutilizando Cypress.io

<br>

## Pré-Requisitos
Para instalar as dependências do projeto e rodar os testes é necessário que o [Node.js](https://nodejs.org/en) e o [NPM](https://www.npmjs.com) estejam instalados em seu computador.



<br>

## Instalação
Faça o clone do projeto: `git clone https://github.com/carlinhabiomed/testeAllianca.git`. Em seguida, acesse o diretório raiz e execute o comando `npm install` para instalar as dependências de desenvolvimento.

<br>

## Execução dos testes

- Execute o comando `npm run test:open` para rodar os testes em modo interativo.
- Execute o comando `npom run test:run` para rodar os testes em modo headless.

## Limpando dados de teste
- Execute o comando `npm run clean_all`
___

## Estrutura do Projeto

### cypress/e2e
Diretório para os testes e2e

### cypress/support
Diretório para inserir comandos customizados

### cypress/support/GUI
Diretório para alocação de comandos customizados utilizados nos testes e2e


### cypress/screenshots
Diretório com imagens das evidências dos testes

### cypress/videos
Diretório com vídeos das execuções dos testes

### cypress/node_modules
Diretório onde são baixadas as dependencias do projeto

### cypress/support/commands
Arquivo para criação e manutenção de comandos customizados utilizados nos testes e2e

### cypress/support/locators
Arquivo para centralizar os locators do software em teste facilitando a manutenção e organização da automação.

### cypress/.gitignore
Local onde são alocados os diretórios e arquivos que serão ignorados pelo GIT(repositório)

### cypress/config - cypress.config.js
Diretório de configuração do projeto, utilizado para adicionar plugins, etc.


### cypress/package.json
Arquivo que contém as dependencias de desenvolvimento, bem como scripts, utilizados como atalhos para linha de comandos.
___

## Informações adicionais

> Para este projeto foi utilizado o website [OLX](
https://www.olx.com.br/)


