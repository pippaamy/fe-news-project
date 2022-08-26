import { useState } from "react";
import { patchArticle } from "../api";

const Votes = ({ article }) => {
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState("");

  const upVote = () => {
    setVotes((currentVotes) => {
      setErr("your vote has been counted!");
      return currentVotes + 1;
    });
    patchArticle(article.article_id, 1).catch(() => {
      setVotes((currentVotes) => {
        setErr("Something went wrong, please try again later.");
        return currentVotes - 1;
      });
    });
  };
  const downVote = () => {
    setVotes((currentVotes) => {
      setErr("your vote has been counted!");
      return currentVotes - 1;
    });
    patchArticle(article.article_id, -1).catch(() => {
      setVotes((currentVotes) => {
        setErr("Something went wrong, please try again later.");
        return currentVotes + 1;
      });
    });
  };

  return (
    <div>
      <p>Votes :{article.votes + votes}</p>
      <button
        onClick={() => upVote(article.article_id, true)}
        className="upVote"
      >
        Vote up!
      </button>
      <button
        onClick={() => downVote(article.article_id, true)}
        className="downVote"
      >
        {" "}
        Vote down{" "}
      </button>
      <p>{err}</p>
    </div>
  );
};

export default Votes;
