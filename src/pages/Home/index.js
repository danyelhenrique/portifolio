import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { projectsRequest } from "../../store/modules/Project/actions";

import Hero from "../../components/Hero";
import Post from "../../components/Posts";
import Contact from "../../components/Contact";
import Main from "../../components/Main";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectsRequest());
  }, []);

  return (
    <Main>
      <Hero />
      <Post />
      <Contact />
    </Main>
  );
}

export default Home;
