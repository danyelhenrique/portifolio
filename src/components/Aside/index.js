import React, { useState } from "react";

import UserConfingModal from "../Modals/UserConfig";
import { MdSearch, MdChevronRight } from "react-icons/md";

// import "./styles.css";
import {
  Container,
  UserModal,
  Form,
  Search,
  Nav,
  BorderTop,
  BorderBottom,
  BorderLeft,
  BorderRight,
  AsideItem
} from "./styles";

import avatar from "../../assets/images/avatar.jpg";

function Aside() {
  const [modal, setModal] = useState(true);
  function openModal() {
    setModal(!modal);
  }

  return (
    <>
      <Container className="aside-container">
        <UserModal className="aside-tag">
          <button type="button" onClick={openModal}>
            <img src={avatar} alt="avatar" />
          </button>
        </UserModal>
        <Form>
          <input placeholder="Search" />
          <Search type="submit">
            <MdSearch size={30} />
          </Search>
        </Form>
        <Nav className="aside-nav">
          <ul>
            <li>
              <MdChevronRight size={20} />

              <AsideItem className="aside-btn">
                <button onClick={e => console.log(e)}>
                  <span>React</span>
                  <BorderTop className="border top" />
                  <BorderBottom className="border bottom" />
                  <BorderLeft className="border left" />
                  <BorderRight className="border right" />
                </button>
              </AsideItem>
            </li>
            <li>
              <MdChevronRight size={20} />

              <AsideItem className="aside-btn">
                <button onClick={e => console.log(e)}>
                  <span>Node JS</span>

                  <BorderTop className="border top" />
                  <BorderBottom className="border bottom" />
                  <BorderLeft className="border left" />
                  <BorderRight className="border right" />
                </button>
              </AsideItem>
            </li>
            <li>
              <MdChevronRight size={20} />

              <AsideItem className="aside-btn">
                <button onClick={e => console.log(e)}>
                  <span>React Native</span>

                  <BorderTop className="border top" />
                  <BorderBottom className="border bottom" />
                  <BorderLeft className="border left" />
                  <BorderRight className="border right" />
                </button>
              </AsideItem>
            </li>
            <li>
              <MdChevronRight size={20} />

              <AsideItem className="aside-btn">
                <button onClick={e => console.log(e)}>
                  <span>GraghpQl</span>

                  <BorderTop className="border top" />
                  <BorderBottom className="border bottom" />
                  <BorderLeft className="border left" />
                  <BorderRight className="border right" />
                </button>
              </AsideItem>
            </li>
          </ul>
        </Nav>
      </Container>
      <UserConfingModal />
    </>
  );
}

export default Aside;
