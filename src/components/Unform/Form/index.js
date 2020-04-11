import React from "react";

import { Form } from "./styles";

export default function UForm({
  handleForm,
  initialData = {},
  children,
  ...rest
}) {
  function handleSubmit(data, { reset }) {
    handleForm(data, { reset });
  }

  return (
    <Form onSubmit={handleSubmit} initialData={initialData} {...rest}>
      {children}
    </Form>
  );
}

export { UForm };
