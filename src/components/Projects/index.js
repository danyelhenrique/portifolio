import React from "react";

import { useSelector } from "react-redux";

import Next from "../Next";
import Box from "../Box";

import { Container } from "./styles";

export default function ProjectsContainer() {
  const { projects, isLoading } = useSelector((state) => state.project);

  if (isLoading) return <h1>loading</h1>;

  return (
    <>
      {projects.map((project, index) => {
        const sectionId = `section-${index}`;
        const nextSectionId = `#section-${index + 1}`;

        return (
          <Container id={sectionId} background={project.background_url}>
            <Box project={project} />

            {projects.length !== index + 1 && (
              <Next nextSectionId={nextSectionId} />
            )}
          </Container>
        );
      })}
    </>
  );
}
