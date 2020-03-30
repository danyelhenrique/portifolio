export function addTagFilter(payload) {
  return {
    type: "@TAG/FILTER_TAG_ITEM",
    payload
  };
}

export function searchTag(payload) {
  return {
    type: "@TAG/SEARCH_TAG_ITEM",
    payload
  };
}
