import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://pippas-news-app.herokuapp.com/api/articles")
    .then((res) => {
      return res.data.articles;
    });
};
