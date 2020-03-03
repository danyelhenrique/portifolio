import React, { forwardRef } from "react";

// import { Container } from './styles';
// import "./styles.css";

function Label({ children, ...props }, ref) {
  return (
    <label {...props} ref={ref}>
      {children}
    </label>
  );
}

export default forwardRef(Label);
