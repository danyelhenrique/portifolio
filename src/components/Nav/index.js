import React, { useState } from "react";

// import { Container } from './styles';
import "./styles.css";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <a className="toggle-menu" />
      <nav></nav>
    </>
  );
}
