import { useState } from "react";
import { patchArticle } from "../api";

const Votes = ({ article }) => {
  const [votes, setVotes] = useState(0);

  const upVote = () => {
    setVotes((currentVotes) => {
      return currentVotes + 1;
    });
    patchArticle(article.article_id, 1).catch(() => {
      alert("Sorry, something went wrong. Please try again later.");
      setVotes((currentVotes) => {
        return currentVotes - 1;
      });
    });
  };
  const downVote = () => {
    setVotes((currentVotes) => {
      return currentVotes - 1;
    });
    patchArticle(article.article_id, -1).catch(() => {
      alert("Sorry, something went wrong. Please try again later.");
      setVotes((currentVotes) => {
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
    </div>
  );
};

export default Votes;
