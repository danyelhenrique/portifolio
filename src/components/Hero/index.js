import React from "react";

import { useSelector } from "react-redux";

import { HeroContainer, Title } from "./styles";
import Next from "../Next";

const background =
  "https://c0.wallpaperflare.com/preview/524/860/912/screen-code-coding-programming.jpg";

export default function Hero() {
  const { name } = useSelector((state) => state.user.user);

  return (
    <HeroContainer background={background}>
      <Title>
        <h1>{name} Full Stack Developer</h1>
      </Title>
      <Next nextSectionId="#section-0" />
    </HeroContainer>
  );
}
