import { useContext, useState } from "react";
import { postComments } from "../api";
import { UserContext } from "./User";

const CommentBox = ({ article }) => {
  const [newComment, setNewComment] = useState({});
  const id = article.article_id;
  const { currentUser } = useContext(UserContext);

  const postComment = (event) => {
    const body = event.target.body.value;

    const commentToPost = {
      body: body,
      username: currentUser.username,
    };

    postComments(id, commentToPost)
      .then((comment) => {
        setNewComment(comment);
      })
      .catch(() => {
        setNewComment({
          author: currentUser.username,
          body: "Please try again later!",
        });
      });

    event.preventDefault();
  };
  return (
    <section>
      <form onSubmit={postComment}>
        <textarea id="newComment" name="body" rows="6" cols="50">
          Leave a comment!
        </textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="new_comment">
        <h2>{newComment.author} </h2>
        <p>{newComment.body}</p>
      </div>
    </section>
  );
};

export default CommentBox;
