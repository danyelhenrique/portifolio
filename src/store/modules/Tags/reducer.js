import produce from "immer";

const INITIAL_STATE = {
  filters: [],
  tags: [],
  tag_search: [],
  item: null
};

function filterReducer(state = INITIAL_STATE, action) {
  return produce(state, draftState => {
    switch (action.type) {
      case "@FILTER/FILTER_TAG_ITEM": {
        const { filter } = action.payload;

        const clearFitler = filter
          .toString()
          .trim()
          .toLowerCase();

        const available = draftState.tags.includes(clearFitler);
        const fitlerAlreadyUsed = draftState.filters.includes(clearFitler);

        if (!filter || !available || fitlerAlreadyUsed) return;

        draftState.filters.push(filter);
        break;
      }
      case "@PROJECT/PROJECTS_SUCCESS": {
        const { available_tags } = action.payload;

        draftState.tags = Object.keys(available_tags);

        break;
      }
      case "@TAG/SEARCH_TAG_ITEM": {
        const { tag } = action.payload;

        const tagClear = tag
          .toString()
          .trim()
          .toLowerCase();

        const tags = draftState.tags.filter(tag => tag.includes(tagClear));

        draftState.tag_search = tags;
        break;
      }
      default:
        return state;
    }
  });
}

export default filterReducer;
