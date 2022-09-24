import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api";
import Topic from "./Topic";
import dateFormat from "dateformat";
import Sorting from "./Sorting";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [chosenTopic, setChosenTopic] = useState("");
  const [sort, setSort] = useState("created_at");
  const [ord, setOrd] = useState("ASC");

  useEffect(() => {
    getArticles(chosenTopic, sort, ord).then((articles) => {
      setArticles(articles);
    });
  }, [chosenTopic, sort, ord]);

  return (
    <section>
      <div>
        <Topic setChosenTopic={setChosenTopic} chosenTopic={chosenTopic} />
        <Sorting sort={sort} setSort={setSort} ord={ord} setOrd={setOrd} />
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
