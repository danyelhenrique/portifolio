import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { projectsRequest } from "../../store/modules/Project/actions";

import Aside from "../../components/Admin/Aside";
import PostsEdit from "../../components/Admin/PostsEdit";
import PostsList from "../../components/Admin/PostsList";
import Main from "../../components/Main";

import { Container } from "./styles";

function Admin() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(projectsRequest());
  }, []);

  return (
    <Main>
      <Aside />
      <Container>
        <PostsEdit />
        <PostsList />
      </Container>
    </Main>
  );
}

export default Admin;
