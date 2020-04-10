import React from "react";
import jump from "jump.js";

import { MdExpandMore } from "react-icons/md";
import { Next } from "./styles";

export default function NextContainer({ nextSectionId }) {
  function handleClick() {
    try {
      jump(nextSectionId);
    } catch (err) {}
  }

  return (
    <Next onClick={handleClick}>
      <MdExpandMore size={40} color="#ff" />
    </Next>
  );
}
