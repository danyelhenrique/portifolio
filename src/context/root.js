import React from "react";
import ProjectContext from "./modules/project";
import UsertContext from "./modules/user";

export default function Root({ children }) {
  return (
    <UsertContext>
      <ProjectContext>{children}</ProjectContext>
    </UsertContext>
  );
}
