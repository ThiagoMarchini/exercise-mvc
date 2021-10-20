const express = require('express');
const bodyParser = require('body-parser');

const { listCategories, redirection } = require('./controllers/categories');
const { getRandom, getCategory } = require('./controllers/joke');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', redirection);
app.get('/categories', listCategories);

app.get('/jokes', getRandom)
app.get('/jokes/:category', getCategory);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});