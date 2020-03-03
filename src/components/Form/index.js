import React, { forwardRef } from "react";

// import { Container } from './styles';
import "./styles.css";

function Form({ children, handleSumit, ...rest }, ref) {
  function handleSumitForm(event) {
    event.preventDefault();

    const state = {};

    const inputs = ref.current.elements;

    Object.entries(inputs).map(setInputValues);

    function setInputValues(name, value) {
      if (!inputs[value].hasOwnProperty("value")) return false;

      let formatKey = name.slice(1)[0];

      let key = !formatKey.name ? formatKey.id : formatKey.name;

      state[key] = inputs[value].value;
    }

    return handleSumit(state);
  }

  return (
    <form
      className="contact-container-form"
      ref={ref}
      onSubmit={e => handleSumitForm(e)}
      {...rest}
    >
      {children}
    </form>
  );
}

export default forwardRef(Form);
