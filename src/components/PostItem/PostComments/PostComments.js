import React from "react";

function PostComments({ comments }) {
  return (
    <div className="post__comments">
      <div className="divider" />
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <img
            src={comment.author.avatar}
            alt={comment.author.name}
            className="post__avatar"
          />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PostComments;
