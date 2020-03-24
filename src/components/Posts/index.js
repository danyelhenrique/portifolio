import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./styles.css";

import GoTo from "../GoTo";
import Box from "../Box";
import PostItems from "../PostItems";

import calculator from "../../assets/images/store.png";
import git from "../../assets/images/github-compare.png";
import music from "../../assets/images/music.jpg";

import { ProjectContext } from "../../context/modules/project";

const imgs = [calculator, music, git];

export default function Posts() {
  const [state] = useContext(ProjectContext);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (state.isLoading) return <h1>isLaoinf</h1>;

  return (
    <section className="post-container">
      {state.project.map((project, index) => (
        <PostItems id={`section-${index}`} img={project.background_url}>
          <Box project={project} />

          <GoTo go={`#section-${index + 1}`} />
        </PostItems>
      ))}
    </section>
  );
}
