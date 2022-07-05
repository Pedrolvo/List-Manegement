# List-Manegement

## Visão geral

### Desafio:

A empresa Ebytr está passando por problemas de produtividade/controle porque as pessoas colaboradoras vêm tendo dificuldade na organização de suas tarefas individuais. Por esse motivo, a diretora de produto Carolina Bigonha decidiu implantar uma nova forma de organizar as tarefas.
Você foi a pessoa contratada para desenvolver um sistema capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.

<br />

## Rode em sua maquina

### Modo tradicional

<details>
  <summary><b>Requisitos:</b></summary><br>

  - Ter o `Git` instalado em sua máquina.
  - Ter o `node` instalado em sua máquina.
  - Ter o 'MYSQL' instalado em sua máquina.
  
</details>

<details>
  <summary><b>Passos</b></summary><br>
  
 Clone o Repositório
 
`Backend:`

Entre na pasta do projeto:

```
cd List-Manegement/backend/
```

Instale as dependências do projeto:

```
npm i
```

Crie um arquivo .env:

```
touch .env
```

Preencha o arquivo .env com as seguintes informações:

```
DB_USER=Seu usuario no mysql
DB_PASSWORD=Sua senha utilizada no mysql
DB_HOST=localhost
DB_NAME=No que ira dar a db
SERVER_PORT=Port que utilaza no seu mysql

```

Inicie o DB:

```
npm run db:reset
```

Inicie o projeto:

```
npm start
```
  
`Frontend:`
  
Entre na pasta do projeto:

```
cd List-Manegement/frontend/
```

Instale as dependencias:

```
npm install
```
Faça o seguinte caminho:

```
src/services/URL_BASE.jsx

Dentro do arquivo URL_BASE.jsx altere o numero 3003 para a porta que estiver rodando o seu backend

Inicie o projeto:

```
npm start
```

Abra o link abaixo no navegador de sua preferencia:

```
http://localhost:3000/
```

