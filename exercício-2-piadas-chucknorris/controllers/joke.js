const { getRandomJoke, getFromCategory } = require('../models/jokes');

const getRandom = async (_req, res) => {
  const joke = await getRandomJoke();
  console.log(joke);
  return res.render('jokes', { joke });
};

const getCategory = async (req, res) => {
  const { category } = req.params;
  const joke = await getFromCategory(category);
  return res.render('jokes', { joke });
}

module.exports = {
  getCategory,
  getRandom,
}