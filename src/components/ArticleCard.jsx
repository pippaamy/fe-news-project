import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import CommentBox from "./CommentBox";
import Comments from "./Comments";
import Votes from "./Votes";
import dateFormat from "dateformat";

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
        <p> {dateFormat(article.created_at)}</p>
        <p>{article.body}</p>
        <br />
        <p>{article.author}</p>
      </section>
      <div>
        <Votes article={article} />
      </div>
      <div>
        <CommentBox article={article} />
        <Comments />
      </div>
    </div>
  );
};

export default ArticleCard;
