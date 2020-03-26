import React, { useEffect } from "react";
import Aside from "../../components/Admin/Aside";
import PostsEdit from "../../components/Admin/PostsEdit";
import PostsList from "../../components/Admin/PostsList";

import Main from "../../components/Main";
import { Container } from "./styles";

function Admin() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
