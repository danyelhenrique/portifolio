import React from "react";
import Aside from "../../components/Aside";
import PostsEdit from "../../components/PostsEdit";
import PostsList from "../../components/PostsList";

import Main from "../../components/Main";
import { Container } from "./styles";

function Admin() {
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
