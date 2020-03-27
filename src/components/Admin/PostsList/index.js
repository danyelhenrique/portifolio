import React from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { Container, Project, Image, Content } from "./styles";

import { MdEdit } from "react-icons/md";

export default function PostList() {
  const { projects } = useSelector(state => state.project);
  const dispatch = useDispatch();

  function handleClick(project) {
    const payload = {
      project,
      isEdit: true
    };
    dispatch({ type: "@PROJECT/PROJECT_EDIT", payload });
  }

  return (
    <Container>
      {projects.map(project => (
        <Project>
          <Image>
            <button onClick={() => handleClick(project)}>
              <MdEdit color="#fff" size={50} />
            </button>
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
