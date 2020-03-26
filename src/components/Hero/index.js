import React from "react";

import { HeroContainer, Title } from "./styles";
import Next from "../Next";

import background from "../../assets/images/banner.jpg";

export default function Hero() {
  return (
    <HeroContainer background={background}>
      <Title>
        <h1>Danyel Full Stack Developer</h1>
      </Title>
      <Next />
    </HeroContainer>
  );
}
