import React, { useState } from "react";

import UserConfingModal from "../../Modals/UserConfig";
import { MdSearch, MdChevronRight } from "react-icons/md";

import avatar from "../../../assets/images/avatar.jpg";

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

function Aside() {
  const [modal, setModal] = useState(false);
  function handleModal() {
    setModal(!modal);
  }

  return (
    <>
      <Container>
        <UserModal>
          <button type="button" onClick={handleModal}>
            <img src={avatar} alt="avatar" />
          </button>
        </UserModal>
        <Form>
          <input placeholder="Search" />
          <Search type="submit">
            <MdSearch size={30} />
          </Search>
        </Form>
        <Nav>
          <ul>
            <li>
              <MdChevronRight size={20} />

              <AsideItem>
                <button onClick={e => console.log(e)}>
                  <span>React</span>
                  <BorderTop />
                  <BorderBottom />
                  <BorderLeft />
                  <BorderRight />
                </button>
              </AsideItem>
            </li>
            <li>
              <MdChevronRight size={20} />

              <AsideItem>
                <button onClick={e => console.log(e)}>
                  <span>Node JS</span>

                  <BorderTop />
                  <BorderBottom />
                  <BorderLeft />
                  <BorderRight />
                </button>
              </AsideItem>
            </li>
            <li>
              <MdChevronRight size={20} />

              <AsideItem>
                <button onClick={e => console.log(e)}>
                  <span>React Native</span>

                  <BorderTop />
                  <BorderBottom />
                  <BorderLeft />
                  <BorderRight />
                </button>
              </AsideItem>
            </li>
            <li>
              <MdChevronRight size={20} />

              <AsideItem>
                <button onClick={e => console.log(e)}>
                  <span>GraghpQl</span>

                  <BorderTop />
                  <BorderBottom />
                  <BorderLeft />
                  <BorderRight />
                </button>
              </AsideItem>
            </li>
          </ul>
        </Nav>
      </Container>
      <UserConfingModal isOpen={modal} handleModal={handleModal} />
    </>
  );
}

export default Aside;
