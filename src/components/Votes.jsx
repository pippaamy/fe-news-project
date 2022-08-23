import { useState } from "react";

const Votes = ({ article }) => {
  const [votes, setVotes] = useState(article.votes);

  const handleClick = () => {
    setVotes(article.votes + 1);
  };
  console.log(votes);

  return (
    <div>
      <p>Votes :{article.votes}</p>
      <button onClick={handleClick} className="upVote">
        Give me a vote!
      </button>
      <button className="downVote"> I don't like this </button>
    </div>
  );
};

export default Votes;
