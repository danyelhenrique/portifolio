import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  projectSearchCancel,
  projectSearchRequest,
} from "../../store/modules/Project/actions";

import { Form, Input } from "../Unform";

import { Search } from "./styles";
import { MdSearch, MdClose } from "react-icons/md";

export default function SearchContainer() {
  const dispatch = useDispatch();
  const { has_search_item } = useSelector((state) => state.project);

  function handleChange({ title }, { reset }) {
    const cancelOrRequest = has_search_item
      ? projectSearchCancel
      : projectSearchRequest;

    dispatch(cancelOrRequest({ title }));
    reset();
  }

  return (
    <Search>
      <Form handleForm={handleChange}>
        <Input
          type="title"
          name="title"
          placeholder="Search Project by Title"
        />

        {!has_search_item ? (
          <button type="submit">
            <MdSearch size={24} color="#fff" />
          </button>
        ) : (
          <button type="submit">
            <MdClose size={24} color="#fff" />
          </button>
        )}
      </Form>
    </Search>
  );
}
