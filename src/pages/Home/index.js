import React from "react";
import Hero from "../../components/Hero";
import Post from "../../components/Posts";
import Contact from "../../components/Contact";
import Main from "../../components/Main";

function Home() {
  return (
    <Main>
      <Hero />
      <Post />
      <Contact />
    </Main>
  );
}

export default Home;
