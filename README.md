# foton-exame - Vítor

Para rodar o sistema sem backend, basta dar um "npm i" ou "yarn". Somente nas pesquisas por livros, o sistema irá mostrar uma mensagem informando que o servidor está offline ou não está respondendo.
```bash
npm i ou yarn
```

# Instalação do backend

Além da instalação dos pacotes como na etapa anterior, também é preciso rodar alguns comandos e criar o banco de dados (mysql)
* Criar o banco de dados chamado "foton-exame"

```bash
cd server/database & knex migrate:latest
```

Após esta etapa e a confirmação de sucesso das migrations, basta rodar o backend com o seguinte comando
```bash
cd ../ & yarn dev
```

