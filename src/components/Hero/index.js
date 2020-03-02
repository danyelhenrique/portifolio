import React from "react";

// import { Container } from './styles';
import GoTo from "../GoTo";

import "./styles.css";
import background from "../../assets/images/banner.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <img src={background} />
      <div className="title">
        <h1>Danyel Full Stack Developer</h1>
      </div>
      <GoTo />
    </section>
  );
}
