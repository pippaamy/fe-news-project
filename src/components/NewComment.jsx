const NewComment = (newComment) => {
  console.log(newComment);
  return (
    <div className="new_comment">
      <h1>You've added a comment!</h1>
      <h2>{newComment.author}</h2>
      <p>{newComment.body}</p>
    </div>
  );
};

export default NewComment;
