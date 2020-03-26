import React from "react";
import { useSelector } from "react-redux";

import { Container, Project, Image, Content } from "./styles";

export default function PostList() {
  const { projects } = useSelector(state => state.project);

  return (
    <Container>
      {projects.map(project => (
        <Project>
          <Image>
            <img src={project.background_url} alt="backround" />
          </Image>
          <Content>
            <h4>{project.title}</h4>
            <span>{project.description.substring(0, 574) + "..."}</span>
          </Content>
        </Project>
      ))}
    </Container>
  );
}
