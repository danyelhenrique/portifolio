import React, { useState } from "react";

// import { Container } from './styles';
import "./styles.css";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <button
        type="button"
        className="toggle-menu"
        onClick={() => setOpenMenu(true)}
      />
      <nav className={`nav ${!openMenu ? "close" : ""}`}>
        <button
          type="button"
          className="toggle-menu-close"
          onClick={() => setOpenMenu(false)}
        />
        <ul>
          <li>
            <div className="icon-menu fa fa-mobile-phone" />
            <a href="#">Contact</a>
          </li>
          <li>
            <div className="icon-menu fa fa-github" />
            <a href="#">GitHub</a>
          </li>
          <li>
            <div className="icon-menu fa fa-linkedin" />
            <a href="#">Linkedin</a>
          </li>
          <li>
            <div className="icon-menu fa fa-mail-forward" />
            <a href="#">Email</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
