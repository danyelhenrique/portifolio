import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import api from "../../../services/api";

import {
  filterTagRequest,
  tagListRequest
} from "../../../store/modules/Tags/actions";

import { MdChevronRight } from "react-icons/md";

import {
  BorderTop,
  BorderBottom,
  BorderLeft,
  BorderRight,
  AsideItem
} from "./styles";

function AsideTags() {
  const { available_tags, tag_search } = useSelector(state => state.tags);
  const dispatch = useDispatch();

  const uniQueTagOrList = useMemo(() => {
    return tag_search.length > 0 ? tag_search : available_tags;
  }, [tag_search, available_tags]);

  useEffect(() => {
    dispatch(tagListRequest());
  }, []);

  function handleTag(tagItem) {
    dispatch(filterTagRequest({ filter: tagItem }));
  }

  return (
    <ul>
      {uniQueTagOrList.map(tagItem => (
        <li>
          <MdChevronRight size={20} />
          <AsideItem>
            <button onClick={() => handleTag(tagItem)}>
              <span>{tagItem.name}</span>
              <BorderTop />
              <BorderBottom />
              <BorderLeft />
              <BorderRight />
            </button>
          </AsideItem>
        </li>
      ))}
    </ul>
  );
}

export default AsideTags;
