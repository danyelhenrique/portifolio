import React, { useContext } from "react";

import Next from "../Next";
import Box from "../Box";
import PostItems from "../PostItems";

import { ProjectContext } from "../../context/modules/project";

export default function Posts() {
  const [state] = useContext(ProjectContext);

  if (state.isLoading) return <h1>loading</h1>;

  return (
    <>
      {state.projects.map((project, index) => (
        <PostItems id={`section-${index}`} img={project.background_url}>
          <Box project={project} />

          <Next go={`#section-${index + 1}`} />
        </PostItems>
      ))}
    </>
  );
}
