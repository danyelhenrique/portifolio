import React from "react";
import "./styles.css";

import GoTo from "../GoTo";
import Box from "../Box";
import PostItems from "../PostItems";

import calculator from "../../assets/images/store.png";
import git from "../../assets/images/github-compare.png";
import music from "../../assets/images/music.jpg";

const imgs = [calculator, music, git];

export default function Posts() {
  return (
    <section className="post-container">
      {imgs.map((img, index) => (
        <PostItems id={`section-${index}`} img={img}>
          <Box />

          <GoTo go={`#section-${index + 1}`} />
        </PostItems>
      ))}
    </section>
  );
}
