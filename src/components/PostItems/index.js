import React from "react";

import { Container } from "./styles";

export default function PostItems({ id, img, children }) {
  return (
    <Container id={id} background={img}>
      {children}
    </Container>
  );
}
