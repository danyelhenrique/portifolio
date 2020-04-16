import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { projectsRequest } from "../../store/modules/Project/actions";

import Main from "../../components/Main";

import Aside from "../../components/Admin/Aside";
import ProjectsForm from "../../components/Admin/ProjectsForm";
import ProjectsList from "../../components/Admin/ProjectsList";

import { Container } from "./styles";

function Admin() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(projectsRequest());
  }, [dispatch]);

  return (
    <Main>
      <Aside />
      <Container>
        <ProjectsForm />
        <ProjectsList />
      </Container>
    </Main>
  );
}

export default Admin;
