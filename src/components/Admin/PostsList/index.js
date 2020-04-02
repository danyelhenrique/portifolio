import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { projectSearchRequest } from "../../../store/modules/Project/actions";

import { Project, Image, Content } from "./styles";

import PostListContainer from "../PostListContainer";

import { MdEdit } from "react-icons/md";

export default function PostList() {
  const dispatch = useDispatch();
  const { filters } = useSelector(state => state.tags);

  const { projects, has_search_item, search_items } = useSelector(
    state => state.project
  );

  const uniqueProjectOrList = useMemo(() => {
    return has_search_item ? search_items : projects;
  }, [has_search_item, projects, search_items]);

  function handleClick(project) {
    const payload = { project, isEdit: true };
    dispatch({ type: "@PROJECT/PROJECT_EDIT", payload });
  }

  return (
    <PostListContainer>
      {uniqueProjectOrList.map(project => (
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
