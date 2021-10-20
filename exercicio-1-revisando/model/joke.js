const axios = require('axios');

const getJoke = async () => {
  try {
    const data = await axios.get('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single');

    return data.data.joke;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getJoke,
}