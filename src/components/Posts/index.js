import React from "react";
import "./styles.css";

// import { Container } from './styles';

import calculator from "../../assets/images/store.png";
import music from "../../assets/images/music.jpg";

const imgs = [calculator, music];
export default function Posts() {
  return (
    <>
      {imgs.map(img => (
        <section
          className="post-container"
          style={{ backgroundImage: `url(${img})` }}
        ></section>
      ))}
    </>
  );
}
