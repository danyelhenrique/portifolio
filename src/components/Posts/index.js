import React from "react";
import { useSelector } from "react-redux";

import Next from "../Next";
import Box from "../Box";
import PostItems from "../PostItems";

export default function Posts() {
  const { projects, isLoading } = useSelector(state => state.project);

  if (isLoading) return <h1>loading</h1>;

  return (
    <>
      {projects.map((project, index) => (
        <PostItems id={`section-${index}`} img={project.background_url}>
          <Box project={project} />

          <Next go={`#section-${index + 1}`} />
        </PostItems>
      ))}
    </>
  );
}
