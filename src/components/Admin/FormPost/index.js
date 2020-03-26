import React, { useContext } from "react";
import { useToasts } from "react-toast-notifications";

import api from "../../../services/api";

import Form from "../../Unform/Form";
import Input from "../../Unform/Input";

import { ProjectContext } from "../../../context/modules/project";
import { Container, ToastMessage } from "./styles";

export default function FormPost() {
  const [state] = useContext(ProjectContext);

  const { addToast, removeToast } = useToasts();

  function handleToast() {
    let toastyId;
    const msg = (
      <ToastMessage>
        <span>Project Save</span>
        <button type="button" onClick={() => handleRemoveToast(toastyId)}>
          CLOSE
        </button>
      </ToastMessage>
    );

    addToast(msg, {}, id => (toastyId = id));
  }

  function handleRemoveToast(toastyId) {
    removeToast(toastyId);
  }

  async function handleForm(data) {
    const postOrPut = state.isEdit ? "put" : "post";
    const url = state.isEdit
      ? `/users/projects/${state.project_item._id}`
      : "/users/projects";

    const tag = data.tag
      .trim()
      .toLowerCase()
      .split(",");

    const post = { ...data, tag };
    const response = await api[postOrPut](url, post);
    handleToast();
  }

  return (
    <Container>
      <Form handleForm={handleForm} initialData={state.project_item}>
        <label htmlFor="background_url">
          Background URL :
          <Input
            name="background_url"
            type="text"
            id="background_url"
            autoComplete="off"
          />
        </label>
        <label htmlFor="title">
          Title :
          <Input name="title" type="text" id="title" autoComplete="off" />
        </label>
        <label htmlFor="description">
          Description :
          <Input
            name="description"
            type="text"
            id="description"
            autoComplete="off"
          />
        </label>
        <label htmlFor="deploy_url">
          Deploy URL :
          <Input
            name="deploy_url"
            type="text"
            id="deploy_url"
            autoComplete="off"
          />
        </label>
        <label htmlFor="github_url">
          Github URL :
          <Input
            name="github_url"
            type="text"
            id="github_url"
            autoComplete="off"
          />
        </label>
        <label htmlFor="tag">
          Tag :
          <Input name="tag" type="text" id="tag" autoComplete="off" />
        </label>
        <button type="submit">Save</button>
      </Form>
    </Container>
  );
}
