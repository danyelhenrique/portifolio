import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchTag } from "../../../store/modules/Tags/actions";

import AsideTags from "../AsideTags";
import UserConfingModal from "../../Modals/UserConfig";
import Form from "../../Unform/Form";

import { MdSearch } from "react-icons/md";

import { Container, UserModal, Search, Nav } from "./styles";

function Aside() {
  const [modal, setModal] = useState(false);
  const { avatar_url } = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  function handleModal() {
    setModal(!modal);
  }

  function handleForm({ target }) {
    dispatch(searchTag({ tag: (target && target.value) || "" }));
  }

  return (
    <>
      <Container>
        <UserModal>
          <button type="button" onClick={handleModal}>
            <img src={avatar_url} alt="avatar" />
          </button>
        </UserModal>
        <Form handleForm={handleForm}>
          <input
            placeholder="Search"
            name="filter"
            onChange={handleForm}
            autoComplete="off"
          />
          <Search type="submit">
            <MdSearch size={30} />
          </Search>
        </Form>
        <Nav>
          <AsideTags />
        </Nav>
      </Container>
      <UserConfingModal isOpen={modal} handleModal={handleModal} />
    </>
  );
}

export default Aside;
