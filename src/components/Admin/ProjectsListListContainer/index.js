import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { filterTagItemRemove } from "../../../store/modules/Tags/actions";

import Search from "../../Search";

import { Container, Filters, FilterContainer, Filter } from "./styles";

import { MdDelete } from "react-icons/md";

export default function ProjectsListListContainer({ children }) {
  const dispatch = useDispatch();

  const { filter_tag } = useSelector((state) => state.tags);

  const { has_search_item } = useSelector((state) => state.project);

  return (
    <>
      <Filters background={has_search_item}>
        <Search />
        <FilterContainer>
          {filter_tag.map((filter) => (
            <Filter>
              <button type="button" onClick={() => filterTagItemRemove()}>
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
