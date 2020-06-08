import React from "react";
import PostItem from "../PostItem";

import data from "../../../posts";
import "./styles.scss";
const { posts } = data();

function PostList() {
  return (
    <section className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </section>
  );
}

export default PostList;
