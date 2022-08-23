import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import Votes from "./Votes";

const ArticleCard = () => {
  const { id } = useParams();

  const [article, setArticle] = useState({});
  useEffect(() => {
    getArticleById(id).then((article) => {
      setArticle(article);
    });
  }, [id]);
  return (
    <div>
      <section className="articles">
        <h1> {article.title}</h1>
        <p>{article.body}</p>
        <br />
        <p>{article.author}</p>
      </section>
      <div>
        <Votes article={article} />
      </div>
    </div>
  );
};

export default ArticleCard;
