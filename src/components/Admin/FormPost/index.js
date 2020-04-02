import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  projectStoreRequest,
  projectUpdateRequest
} from "../../../store/modules/Project/actions";

import Form from "../../Unform/Form";
import Input from "../../Unform/Input";

import { Container } from "./styles";

export default function FormPost() {
  const state = useSelector(state => state.project);
  const dispatch = useDispatch();

  async function handleForm(data, { reset }) {
    const storeOrUpdate = state.isEdit
      ? projectUpdateRequest
      : projectStoreRequest;

    const payload = { ...state.project_item, ...data };
    dispatch(storeOrUpdate(payload));
    reset();
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
        <button type="submit">{state.isEdit ? "UPDATE" : "SAVE"}</button>
      </Form>
    </Container>
  );
}
