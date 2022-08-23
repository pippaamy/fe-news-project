import axios from "axios";

export const getArticles = (topic = "") => {
  return axios
    .get(`https://pippas-news-app.herokuapp.com/api/articles/?topic=${topic}`)
    .then((res) => {
      return res.data.articles;
    });
};

export const getTopics = () => {
  return axios
    .get("https://pippas-news-app.herokuapp.com/api/topics")
    .then((res) => {
      return res.data;
    });
};
