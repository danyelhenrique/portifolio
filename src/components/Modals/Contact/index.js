import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactRequest } from "../../../store/modules/Contact/actions";

import { Form, Input, TextArea } from "../../Unform";

import { Container, Button } from "./styles";

export default function Contact() {
  const dispatch = useDispatch();
  const contactData = useSelector((state) => state.contact);

  function handleForm(data) {
    dispatch(contactRequest(data));
  }

  return (
    <Container>
      <Form handleForm={handleForm} initialData={contactData}>
        <label htmlFor="name">
          Name:
          <Input name="name" autoComplete="off" id="name" placeholder="Name" />
        </label>
        <label htmlFor="email">
          Email:
          <Input
            name="email"
            autoComplete="off"
            id="email"
            placeholder="Mail"
          />
        </label>
        <label htmlFor="message">
          Message:
          <TextArea
            autoComplete="off"
            id="message"
            name="message"
            placeholder="Message"
          />
        </label>
        <Button type="submit">Send</Button>
      </Form>
    </Container>
  );
}
