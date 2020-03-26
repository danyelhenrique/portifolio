import React, { useReducer, useEffect } from "react";
import api from "../../../services/api";

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

function reducer(state, action) {
  switch (action.type) {
    case "@Project/LOAD_PROJECT":
      return { ...state, ...action.payload };
    case "@Project/EDIT_PROJECT":
      return { ...state, ...action.payload };
    default:
      break;
  }
}

export const ProjectContext = React.createContext(INITIAL_STATE);

export default function ProjectModule({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    async function handleProject() {
      const response = await api.get("/users/projects");
      const payload = { ...response.data, isLoading: false };

      dispatch({ type: "@Project/LOAD_PROJECT", payload });
    }
    handleProject();
  }, []);

  return (
    <ProjectContext.Provider value={[state, dispatch]}>
      {children}
    </ProjectContext.Provider>
  );
}
