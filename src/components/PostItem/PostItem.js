import React from "react";

import "./styles.scss";
import PostHeader from "./PostHeader";
import PostComments from "./PostComments";

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post__content">{content}</p>
      <PostComments comments={comments} />
    </div>
  );
}

export default PostItem;
