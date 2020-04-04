export function tagListRequest(payload) {
  return {
    type: "@TAG/TAG_LIST_REQUEST",
    payload
  };
}

export function tagListSuccess(payload) {
  return {
    type: "@TAG/TAG_LIST_SUCCESS",
    payload
  };
}

export function tagListFailure() {
  return {
    type: "@TAG/TAG_LIST_FAILURE"
  };
}

//---------------------------------//

export function filterTagRequest(payload) {
  return {
    type: "@TAG/FILTER_TAG_ITEM_REQUEST",
    payload
  };
}

export function filterTagSuccess(payload) {
  return {
    type: "@TAG/FILTER_TAG_ITEM_SUCCESS",
    payload
  };
}

export function filterTagFailure() {
  return {
    type: "@TAG/FILTER_TAG_ITEM_FAILURE"
  };
}

export function filterTagItemRemove() {
  return {
    type: "@TAG/FILTER_TAG_ITEM_REMOVE"
  };
}

export function searchTag(payload) {
  return {
    type: "@TAG/SEARCH_TAG_ITEM",
    payload
  };
}
