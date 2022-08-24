import axios from "axios";

export const getArticles = (topic = "") => {
  return axios
    .get(`https://pippas-news-app.herokuapp.com/api/articles/?topic=${topic}`)
    .then((res) => {
      return res.data.articles;
    });
};

export const getArticleById = (article_id) => {
  return axios
    .get(`https://pippas-news-app.herokuapp.com/api/articles/${article_id}`)
    .then((res) => {
      return res.data.article;
    });
};

export const getTopics = () => {
  return axios
    .get("https://pippas-news-app.herokuapp.com/api/topics")
    .then((res) => {
      return res.data;
    });
};

export const patchArticle = (article_id, amount) => {
  return axios.patch(
    `https://pippas-news-app.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: amount }
  );
};
