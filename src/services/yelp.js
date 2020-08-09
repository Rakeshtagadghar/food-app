import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers:{
      Authorization:'Bearer nuMybejuie3w4NpEi0sS_Cup7-rmndkFpSaxZwCfH5uH9_Tuasc9cHwIwEX6Vk0B9QGKAeFYfWpxdKsP6wyoqzVQtd80QkNwk5paHam7Cza4v8IFe1Cjhqk1EM3tXnYx'
  }
});