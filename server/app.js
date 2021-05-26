const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const app = express()

// Importanto rotas
const book = require('./routes/book');

// Middlewares usados pelo express
app.use(helmet())
app.use(express.static(path.join(__dirname, '../front/build')));
app.use(bodyParser.json({
    limit: '10mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors())

// Rotas
app.use('/api/book', book);

app.use(function (req, res) {
    if (process.env.NODE_ENV === 'development') return;
    return res.sendFile(path.join(__dirname, '../front/build', 'index.html'));
});

app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log(`Aberto na porta ${process.env.SERVER_PORT}!`);
});

module.exports = app;