import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Article, Header, Footer } from "./styles";
import { MdModeEdit } from "react-icons/md";

export default function Posts({ project }) {
  let history = useHistory();
  const dispatch = useDispatch();

  function handleClick(project) {
    const payload = {
      project_item: project,
      isEdit: true
    };
    dispatch({ type: "@Project/EDIT_PROJECT", payload });
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
        <a href="#">Github</a>
        <a href="#">Demo</a>
      </Footer>
    </Article>
  );
}
