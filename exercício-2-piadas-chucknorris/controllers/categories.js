const { getCategories } = require('../models/categories');

const listCategories = async (_req, res) => {
  const categories = await getCategories();
  res.render('categories', { categories });
};

const redirection = (_req, res) => {
  res.redirect('/category');
};

module.exports = {
  listCategories,
  redirection,
}