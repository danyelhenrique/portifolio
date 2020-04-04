import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Project, Image, Content } from "./styles";

import PostListContainer from "../PostListContainer";

import { MdEdit } from "react-icons/md";

export default function PostList() {
  const dispatch = useDispatch();

  const { filter_data } = useSelector(state => state.tags);

  const { projects, has_search_item, search_items } = useSelector(
    state => state.project
  );

  const allProjectsOrWithFilter = useMemo(() => {
    return filter_data.length > 0 ? filter_data : projects;
  }, [filter_data, projects]);

  function handleClick(project) {
    const payload = { project, isEdit: true };
    dispatch({ type: "@PROJECT/PROJECT_EDIT", payload });
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
      {allProjectsOrWithFilter.map(project => (
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
