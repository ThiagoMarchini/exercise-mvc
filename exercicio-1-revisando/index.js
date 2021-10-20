const express = require('express');
const { listJokes } = require('./controller/joke');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', listJokes);

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta ${PORT}!`);
});