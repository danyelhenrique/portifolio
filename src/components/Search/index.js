import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  projectSearchCancel,
  projectSearchRequest,
} from "../../store/modules/Project/actions";

import { Form, Input } from "../Unform";

import { Search } from "./styles";
import { MdSearch, MdClose } from "react-icons/md";

export default function SearchContainer() {
  const [showInput, setShowInput] = useState(false);

  const dispatch = useDispatch();

  function handleChange({ title }, { reset }) {
    dispatch(projectSearchRequest({ title }));
    reset();
  }

  function cancelSearch() {
    dispatch(projectSearchCancel());
    setShowInput(false);
  }

  return (
    <Search show={showInput}>
      <Form handleForm={handleChange}>
        <button type="submit" onMouseOver={() => setShowInput(true)}>
          <MdSearch size={24} color="#fff" />
        </button>
        <Input
          type="title"
          name="title"
          placeholder="Search Project by Title"
        />

        <button type="button" onClick={cancelSearch} id="btn-cancel">
          <MdClose size={24} color="#fff" />
        </button>
      </Form>
    </Search>
  );
}
