import styled from "styled-components";

export const People = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Person = styled.div`
  height: 50px;
  width: 50px;
  /* border-radius: 100%; */

  /* background: #0b1b37; */

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    height: 100%;
    width: 100%;
    border-radius: 100%;
    background: #0b1b37;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  :hover {
    transform: rotateX(360deg);

    img {
      opacity: 1;
      display: block;
    }
  }

  img {
    opacity: 0;
    display: none;
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
`;
