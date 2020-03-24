import React from "react";

import { MdExpandMore } from "react-icons/md";
import { Next } from "./styles";

export default function GoTo({ go }) {
  return (
    <Next href={go}>
      <MdExpandMore size={40} color="#ff" />
    </Next>
  );
}
