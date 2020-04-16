import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { projectsRequest } from "../../store/modules/Project/actions";

import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Main from "../../components/Main";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectsRequest());
  }, []);

  return (
    <Main>
      <Hero />
      <Projects />
    </Main>
  );
}

export default Home;
