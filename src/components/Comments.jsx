import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsById } from "../api";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCommentsById(id).then((comments) => {
      console.log(id);
      setComments(comments);
    });
  }, [id]);

  return (
    <div>
      <h1>Comments </h1>
      <ul className="list">
        {comments.map((comment) => {
          return (
            <li className="comment">
              <h3>{`Author: ${comment.author}`}</h3>
              <p> {`${comment.body}`}</p>
              <p> {`Votes: ${comment.votes}`}</p>
            </li>
          );
        })}
        <br />
      </ul>
    </div>
  );
};

export default Comments;
