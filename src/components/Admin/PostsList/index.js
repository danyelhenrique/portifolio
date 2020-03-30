import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { projectSearchRequest } from "../../../store/modules/Project/actions";

import { Project, Image, Content } from "./styles";

import PostListContainer from "../PostListContainer";

import { MdEdit, MdSearch } from "react-icons/md";

export default function PostList() {
  const { projects, has_search_item, search_items } = useSelector(
    state => state.project
  );
  const { filters } = useSelector(state => state.tags);

  const dispatch = useDispatch();

  function handleClick(project) {
    const payload = { project, isEdit: true };
    dispatch({ type: "@PROJECT/PROJECT_EDIT", payload });
  }

  function handleChange({ target }) {
    const project = target.value;

    dispatch(projectSearchRequest({ title: project }));
  }

  if (has_search_item) {
    return (
      <PostListContainer>
        {search_items.map(project => (
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
      </PostListContainer>
    );
  }

  return (
    <PostListContainer>
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
    </PostListContainer>
  );
}
