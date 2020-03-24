import React, { useState } from "react";

import { NavContainer, Button } from "./styles";

import { MdEmail, MdPhoneIphone, MdReorder, MdClose } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
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
            <a href="#">Contact</a>
          </li>
          <li>
            <FaGithub size={24} color="#fff" />
            <a href="#">GitHub</a>
          </li>
          <li>
            <FaLinkedinIn size={24} color="#fff" />
            <a href="#">Linkedin</a>
          </li>
          <li>
            <MdEmail size={24} color="#fff" />
            <a href="#">Email</a>
          </li>
        </ul>
      </NavContainer>
    </>
  );
}
