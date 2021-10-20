const axios = require('axios');

const getRandomJoke = async () => {
  const joke = await axios.get('https://api.chucknorris.io/jokes/random');

  return joke.data.value;
}

const getFromCategory = async (category) => {
  const joke = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
  return joke.data.value;
}

module.exports = {
  getFromCategory,
  getRandomJoke,
}