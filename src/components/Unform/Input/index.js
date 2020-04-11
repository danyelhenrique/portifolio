import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { Input } from "./styles";

export default function UInput({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = "", registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return <Input ref={inputRef} defaultValue={defaultValue} {...rest} />;
}

export { UInput };
