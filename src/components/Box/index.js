import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Article, Header, Footer } from "./styles";
import { MdModeEdit } from "react-icons/md";

export default function Posts({ project }) {
  let history = useHistory();
  const dispatch = useDispatch();

  function handleClick(project) {
    const payload = {
      project,
      isEdit: true,
    };
    dispatch({ type: "@PROJECT/PROJECT_EDIT", payload });
    history.push("/admin");
  }

  return (
    <Article>
      <button type="button" onClick={() => handleClick(project)}>
        <MdModeEdit color="#fff" size={24} />
      </button>
      <Header>
        <h2>{project.title}</h2>
      </Header>
      <div>
        <span>{project.description}</span>
      </div>
      <Footer>
        <a href={project.github_url} target="_blank">
          Github
        </a>
        <a href={project.deploy_url} target="_blank">
          Demo
        </a>
      </Footer>
    </Article>
  );
}
