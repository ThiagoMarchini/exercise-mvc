const { getJoke } = require('../model/joke');

const listJokes = async (_req, res) => {
  const joke = await getJoke();
  console.log(joke);
  return res.render('jokeView.ejs', { joke });
}

module.exports = {
  listJokes,
}