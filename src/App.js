import React from "react";
import { hot } from "react-hot-loader/root";

import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default hot(App);
