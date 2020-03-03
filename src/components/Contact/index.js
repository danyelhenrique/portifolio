import React from "react";

// import { Container } from './styles';
import "./styles.css";

import Form from "../Form";
import Input from "../Form/Input";
import SocialMedia from "../SocialMedia";

export default function Contact() {
  const ref = React.useRef(null);

  function handleSumit(data) {
    console.log("data", data);
  }

  function hanleFocus(event) {
    const hasValue = event.target.value;

    if (event.type === "focus") {
      // toogle.className = "coisa";
    }

    if (event.type === "blur" && !hasValue) {
      // toogle.className = "";
    }
  }

  return (
    <section className="contact-container">
      <SocialMedia />
      <div className="form-container">
        <Form handleSumit={() => {}} ref={ref}>
          <div className="input-container">
            <label htmlFor="name">
              <span id="coisas2">Name</span>
              <Input id="name" required name="name" hanleFocus={hanleFocus} />
            </label>

            <label htmlFor="email">
              <span id="coisas2">E-mail</span>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="E-mail"
                required
              />
            </label>
          </div>

          <label htmlFor="text-area">
            <textarea
              id="text-area"
              required
              placeholder="You Message"
              rows="6"
            ></textarea>
          </label>
          <button type="submit" className="contact-container-submit">
            Send Message
          </button>
        </Form>
      </div>
    </section>
  );
}
