import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { deleteComment, getCommentsById } from "../api";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const refreshPage = () => {
    window.parent.location = window.parent.location.href;
  };

  const handleClick = (comment) => {
    return function () {
      if (window.confirm("This comment will be deleted, is that okay?")) {
        deleteComment(id, comment.comment_id).then((res) => {
          // setAllComments((currState) => [...currState]);
          alert("Comment deleted");
          refreshPage();
        });
      }
    };
  };

  useEffect(() => {
    getCommentsById(id).then((comments) => {
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
              <button id={comment.comment_id} onClick={handleClick(comment)}>
                Delete
              </button>
            </li>
          );
        })}
        <br />
      </ul>
    </div>
  );
};

export default Comments;
