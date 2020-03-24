import React from "react";

import { Form } from "./styles";

export default function UForm({ handleForm, children }) {
  function handleSubmit(data) {
    handleForm(data);
  }

  return <Form onSubmit={handleSubmit}>{children}</Form>;
}
