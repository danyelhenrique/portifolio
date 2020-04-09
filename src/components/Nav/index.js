import React, { useState } from "react";
import { Link, useRouteMatch } from 'react-router-dom'

import { useSelector } from 'react-redux';

import { NavContainer, Button } from "./styles";

import { MdEmail, MdPhoneIphone, MdReorder, MdClose, MdAccountCircle } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const { isloggedin } = useSelector(state => state.session);
  const isAdminPage = useRouteMatch("/admin");

  return (
    <>
      {!openMenu && (
        <Button type="button" onClick={() => setOpenMenu(true)}>
          <MdReorder color="#fff" size={24} />
        </Button>
      )}
      <NavContainer openMenu={openMenu}>
        <Button type="button" onClick={() => setOpenMenu(false)}>
          <MdClose color="#fff" size={24} />
        </Button>

        <ul>
          <li>
            <MdPhoneIphone size={24} color="#fff" />
            <Link to="#">Contact</Link>
          </li>
          <li>
            <FaGithub size={24} color="#fff" />
            <Link to="https://github.com/danyelhenrique" target="_blank">GitHub</Link>
          </li>
          <li>
            <FaLinkedinIn size={24} color="#fff" />
            <Link to="https://www.linkedin.com/in/danyel-henrique" target="_blank">Linkedin</Link>
          </li>
          <li>
            <MdEmail size={24} color="#fff" />
            <Link to="#">Email</Link>
          </li>

          {isloggedin && isAdminPage &&(
            <li>
              <MdAccountCircle size={24} color="#fff" />
              <Link to="/">Home</Link>
            </li>
          )}

          {isloggedin && !isAdminPage &&(
            <li>
              <MdAccountCircle size={24} color="#fff" />
              <Link to="/admin">Admin</Link>
            </li>
          )}
        </ul>
      </NavContainer>
    </>
  );
}

