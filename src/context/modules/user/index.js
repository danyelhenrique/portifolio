import React, { useReducer } from "react";

const INITIAL_STATE = {};

function reducer(state, action) {
  switch (action.type) {
    case "value":
      break;

    default:
      break;
  }
}

export const UserContext = React.createContext({});

export default function UserModule({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
}
