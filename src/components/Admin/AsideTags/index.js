import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { MdChevronRight } from "react-icons/md";

import {
  BorderTop,
  BorderBottom,
  BorderLeft,
  BorderRight,
  AsideItem
} from "./styles";

function AsideTags() {
  const { tags, tag_search } = useSelector(state => state.tags);
  const dispatch = useDispatch();

  if (tag_search.length > 0) {
    return (
      <ul>
        {tag_search.map(tagItem => (
          <li>
            <MdChevronRight size={20} />
            <AsideItem>
              <button onClick={e => console.log(tagItem)}>
                <span>{tagItem}</span>
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

  return (
    <ul>
      {tags.map(tagItem => (
        <li>
          <MdChevronRight size={20} />
          <AsideItem>
            <button onClick={e => console.log(tagItem)}>
              <span>{tagItem}</span>
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
