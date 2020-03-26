import produce from "immer";

const INITIAL_STATE = {
  isLoading: true,
  isEdit: false,
  projects: [],
  project_item: {
    _id: null,
    background_url: "",
    title: "",
    description: "",
    deploy_url: "",
    github_url: "",
    tag: []
  }
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
        break;
      }
      case "@PROJECT/PROJECT_EDIT": {
        draftState.isEdit = true;
        draftState.project_item = action.payload.project;

        break;
      }
      default:
        return state;
    }
  });
}

export default projectReducer;
