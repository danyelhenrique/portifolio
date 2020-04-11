import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { projectsRequest } from "../../store/modules/Project/actions";

import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
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
      <Projects />
      <Contact />
    </Main>
  );
}

export default Home;
