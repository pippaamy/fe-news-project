import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api";
import Topic from "./Topic";
import dateFormat from "dateformat";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [chosenTopic, setChosenTopic] = useState("");

  useEffect(() => {
    getArticles(chosenTopic).then((articles) => {
      setArticles(articles);
    });
  }, [chosenTopic]);

  return (
    <section>
      <div>
        <Topic setChosenTopic={setChosenTopic} chosenTopic={chosenTopic} />
      </div>
      <ul className="list">
        {articles.map((article) => {
          return (
            <Link
              to={`/articles/${article.article_id}`}
              key={article.article_id}
            >
              <li className="articles">
                <h2>{`${article.title}`}</h2>
                <p> {dateFormat(article.created_at, "mmmm dS, yyyy")}</p>
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
