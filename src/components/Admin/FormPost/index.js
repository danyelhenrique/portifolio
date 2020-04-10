import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  projectStoreRequest,
  projectUpdateRequest,
  projectFormReset,
} from "../../../store/modules/Project/actions";

import Form from "../../Unform/Form";
import Input from "../../Unform/Input";
import TextArea from "../../Unform/TextArea";

import { Container } from "./styles";

export default function FormPost() {
  const [formState, setFormState] = useState({});

  const { isEdit, project_item } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    setFormState(project_item);
  }, [project_item, isEdit]);

  function handleForm(data) {
    const storeOrUpdate = isEdit ? projectUpdateRequest : projectStoreRequest;

    const payload = isEdit ? { ...project_item, ...data } : { ...data };

    dispatch(storeOrUpdate(payload));
  }

  function cancelUpdate() {
    dispatch(projectFormReset());
    console.tron.log(project_item);
  }

  return (
    <Container>
      <Form handleForm={handleForm} initialData={formState}>
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
          <TextArea
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
        <button type="submit">{isEdit ? "UPDATE" : "SAVE"}</button>
        {isEdit && (
          <button type="button" onClick={cancelUpdate}>
            CANCEL
          </button>
        )}
      </Form>
    </Container>
  );
}
