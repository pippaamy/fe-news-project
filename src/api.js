import axios from "axios";

export const getArticles = (topic = "", sortby, order) => {
  return axios
    .get(
      `https://pippas-news-app.herokuapp.com/api/articles/?topic=${topic}&sortby=${sortby}&order=${order}`
    )
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

export const getCommentsById = (article_id) => {
  return axios
    .get(
      `https://pippas-news-app.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then((res) => {
      return res.data.comments;
    });
};

export const getUsers = () => {
  return axios
    .get("https://pippas-news-app.herokuapp.com/api/users")
    .then((res) => {
      return res.data.users;
    });
};

export const postComments = (article_id, comment) => {
  return axios
    .post(
      `https://pippas-news-app.herokuapp.com/api/articles/${article_id}/comments`,
      comment
    )
    .then((res) => {
      return res.data.comments[0];
    });
};

export const deleteComment = (article_id, comment_id) => {
  console.log(article_id, comment_id);
  return axios
    .delete(`https://pippas-news-app.herokuapp.com/api/comments/${comment_id}`)
    .then((res) => {
      console.log(res);
      return res.data;
    });
};
