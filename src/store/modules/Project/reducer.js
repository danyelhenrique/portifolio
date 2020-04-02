import produce from "immer";

const INITIAL_PROJECT_ITEM = {
  project_item: {
    _id: null,
    background_url: "",
    title: "",
    description: "",
    deploy_url: "",
    github_url: ""
  }
};

const INITIAL_STATE = {
  isLoading: true,
  isEdit: false,
  has_search_item: false,
  search_items: [],
  projects: [],
  tags: [],
  project_item: { ...INITIAL_PROJECT_ITEM }
};

function projectReducer(state = INITIAL_STATE, action) {
  return produce(state, draftState => {
    switch (action.type) {
      case "@PROJECT/PROJECTS_SUCCESS": {
        draftState.projects = action.payload.projects;

        draftState.isLoading = action.payload.isLoading;
        break;
      }
      case "@PROJECT/PROJECT_STORE_SUCCESS": {
        draftState.projects.push(action.payload.project);
        break;
      }
      case "@PROJECT/PROJECT_UPDATE_SUCCESS": {
        const { _id } = action.payload.project;
        const index = draftState.projects.findIndex(
          project => project._id === _id
        );

        draftState.projects[index] = action.payload.project;

        draftState.project_item = INITIAL_PROJECT_ITEM;

        break;
      }
      case "@PROJECT/PROJECT_SEARCH_SUCCESS": {
        draftState.has_search_item = true;
        draftState.search_items = action.payload.project;
        break;
      }
      case "@PROJECT/PROJECT_SEARCH_FAILURE": {
        draftState.has_search_item = false;
        draftState.search_items = [];
        break;
      }
      case "@PROJECT/PROJECT_SEARCH_CANCEL": {
        draftState.has_search_item = false;
        draftState.search_items = [];

        break;
      }
      case "@PROJECT/PROJECT_EDIT": {
        draftState.isEdit = true;
        const formateTag = action.payload.project.tag.map(tag => tag.name);

        const data = { ...action.payload.project, tag: formateTag };

        draftState.project_item = data;

        break;
      }
      default:
        return state;
    }
  });
}

export default projectReducer;
