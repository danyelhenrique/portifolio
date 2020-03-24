import React from "react";
import Aside from "../../components/Aside";
import PostsEdit from "../../components/PostsEdit";
import Main from "../../components/Main";

function Admin() {
  return (
    <Main>
      <Aside />
      <PostsEdit />
    </Main>
  );
}

export default Admin;
