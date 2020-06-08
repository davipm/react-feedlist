import React from "react";

function PostHeader({ author, date }) {
  return (
    <header className="post__header">
      <img src={author.avatar} alt={author.name} className="post__avatar" />
      <div className="post__details">
        <span className="details-name">{author.name}</span>
        <span>{date}</span>
      </div>
    </header>
  );
}

export default PostHeader;
