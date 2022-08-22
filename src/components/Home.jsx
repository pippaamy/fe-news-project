import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "./api";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return (
    <section>
      <ul>
        {articles.map((article) => {
          return (
            <Link
              to={`/articles/${article.article_id}`}
              key={article.article_id}
            >
              <li className="articles">
                <h2>{`${article.title}`}</h2>
                <p> {`${article.topic}`}</p>
                <p> {`${article.author}`}</p>
              </li>
            </Link>
          );
        })}
        <br />
      </ul>
    </section>
  );
};
export default Home;
