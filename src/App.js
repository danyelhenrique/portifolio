import React from "react";
import Main from "../src/components/Main";
import Hero from "../src/components/Hero";
import Nav from "../src/components/Nav";
import Post from "../src/components/Posts";

import "../src/assets/css/font-awesome.min.css";
import "./reset.css";

function App() {
  return (
    <Main>
      <Hero />
      <Nav />
      <Post />
    </Main>
  );
}

export default App;
