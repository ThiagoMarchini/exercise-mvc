const axios = require('axios');

const getCategories = async () => {
  const categories = await axios.get("https://api.chucknorris.io/jokes/categories");
  console.log(categories.data);
  return categories.data;
};

module.exports = {
  getCategories,
}