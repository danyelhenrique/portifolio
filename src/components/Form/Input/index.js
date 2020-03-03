import React, { forwardRef } from "react";
import "./styles.css";

function Input({ name, hanleFocus, children, ...rest }) {
  return (
    <input name={name} {...rest} onBlur={hanleFocus} onFocus={hanleFocus}>
      {children}
    </input>
  );
}

export default forwardRef(Input);
