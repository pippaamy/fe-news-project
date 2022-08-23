import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";

const ArticleCard = () => {
  const { id } = useParams();
  console.log(id);

  const [article, setArticle] = useState({});
  useEffect(() => {
    getArticleById(id).then((article) => {
      setArticle(article);
    });
  }, [id]);
  return (
    <section className="articles">
      <h1> {article.title}</h1>
      <p>{article.body}</p>
      <br />
      <p>{article.author}</p>
    </section>
  );
};

export default ArticleCard;
