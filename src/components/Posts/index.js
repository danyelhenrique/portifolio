import React from "react";
import "./styles.css";

// import { Container } from './styles';
import GoTo from "../GoTo";
import Box from "../Box";

import calculator from "../../assets/images/store.png";
import music from "../../assets/images/music.jpg";

const imgs = [calculator, music];
export default function Posts() {
  return (
    <section className="post-container">
      {imgs.map((img, index) => (
        <div
          className="post-container-item"
          id={`section-${index}`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <Box />

          <GoTo go={`#section-${index + 1}`} />
        </div>
      ))}
    </section>
  );
}
