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
  switch (action.type) {
    case "@PROJECT/PROJECTS_SUCCESS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default projectReducer;
