import React, { useContext } from "react";

import { ProjectContext } from "../../../context/modules/project";

import { Container, Project, Image, Content } from "./styles";

export default function PostList() {
  const [state] = useContext(ProjectContext);

  return (
    <Container>
      {state.projects.map(project => (
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
