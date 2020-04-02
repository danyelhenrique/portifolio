import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  projectSearchRequest,
  projectSearchCancel
} from "../../../store/modules/Project/actions";

import { filterTagItemRemove } from "../../../store/modules/Tags/actions";

import Form from "../../Unform/Form";
import Input from "../../Unform/Input";

import { Container, Filters, Search, FilterContainer, Filter } from "./styles";

import { MdSearch, MdClose, MdDelete } from "react-icons/md";

export default function PostList({ children }) {
  const { filter_tag } = useSelector(state => state.tags);
  const { has_search_item, search_items } = useSelector(state => state.project);
  const dispatch = useDispatch();

  function handleChange(data, { reset }) {
    if (has_search_item) {
      dispatch(projectSearchCancel());
    } else {
      dispatch(projectSearchRequest({ title: data }));
    }

    reset();
  }

  function removeFilter(filter) {
    dispatch(filterTagItemRemove({ filter }));
  }

  return (
    <>
      <Filters background={has_search_item}>
        <Search>
          <Form handleForm={handleChange}>
            <Input
              type="search"
              name="search"
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
        <FilterContainer>
          {filter_tag.map(filter => (
            <Filter>
              <button type="button" onClick={() => removeFilter(filter)}>
                <MdDelete />
                <span> {filter.name || ""}</span>
              </button>
            </Filter>
          ))}
        </FilterContainer>
      </Filters>
      <Container>{children}</Container>
    </>
  );
}
