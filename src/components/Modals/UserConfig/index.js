import React, { useState } from "react";

import Form from "../../Unform/Form";
import Input from "../../Unform/Input";

import { Container, Avatar } from "./styles";

function UserConfig() {
  const [image, setImage] = useState();

  return (
    <Container>
      <Avatar>
        <img src={image} />
      </Avatar>
      <Form>
        <label htmlFor="name">
          name:
          <Input type="text" name="name" id="name" />
        </label>
        <label htmlFor="email">
          email:
          <Input type="email" name="email" id="email" autoComplete="off" />
        </label>
        <label htmlFor="password">
          password:
          <Input type="password" name="password" id="password" />
        </label>
      </Form>
    </Container>
  );
}

export default UserConfig;
