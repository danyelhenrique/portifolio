import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;

  align-items: center;
  display: flex;
  justify-content: center;
  border-top: 0;
  min-height: 100vh;
  height: 100vh;
  position: relative;
  text-align: center;
  overflow: hidden;

  background: url("${(props) => props.background && props.background}");


  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  ::before {
    content: "";
    transition: opacity 3s ease;
    transition-delay: 1.25s;
    display: block;
    background-color: #000;
    height: 100%;
    left: 0;
    opacity: 0.45;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
}
`;

export const Title = styled.div`
  position: absolute;
  transform: translate(-25%, -25%);
  top: 50%;
  left: 50%;
  z-index: 10;
  width: 100%;
  max-width: 70%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  h1 {
    font-size: 7rem;
    line-height: 1.1;
    font-family: "Lobster", cursive;
    margin-bottom: 0.25em;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: -2px -2px 0 rgba(0, 0, 0, 0.125);
    text-transform: capitalize;
    font-weight: 600;
  }

  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 4.5rem;
      text-align: center;
    }
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 3.5rem;
    }
  }

  @media screen and (max-width: 350px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;
