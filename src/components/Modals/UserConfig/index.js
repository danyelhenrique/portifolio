import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Form from "../../Unform/Form";
import Input from "../../Unform/Input";

import { updateUserRequest } from "../../../store/modules/User/actions";

import { MdClose } from "react-icons/md";

import { Section, Container, Avatar, Button } from "./styles";

function UserConfig({ isOpen, handleModal }) {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    function overFllowBody() {
      const isHidden = !isOpen ? "" : "hidden";
      document.body.style.overflow = isHidden;
    }
    overFllowBody();
    return () => overFllowBody();
  }, [isOpen]);

  function handleForm(data) {
    dispatch(updateUserRequest(data));
  }
  return (
    <Section isOpen={isOpen}>
      <Container>
        <Avatar>
          <button type="button" onClick={handleModal}>
            <MdClose size={32} />
          </button>
          <h2>{user.name} </h2>
          <img src={user.avatar_url} />
        </Avatar>
        <Form initialData={user} handleForm={handleForm}>
          <label htmlFor="avatar">
            avatar_url:
            <Input
              type="avatar"
              name="avatar_url"
              id="avatar"
              autoComplete="off"
            />
          </label>
          <label htmlFor="name">
            name:
            <Input type="name" name="name" id="name" autoComplete="off" />
          </label>
          <label htmlFor="email">
            email:
            <Input type="email" name="email" id="email" autoComplete="off" />
          </label>
          <label htmlFor="password">
            password:
            <Input type="password" name="password" id="password" />
          </label>
          <Button type="submit">Save</Button>
        </Form>
      </Container>
    </Section>
  );
}

export default UserConfig;
