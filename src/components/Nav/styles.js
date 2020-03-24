import styled, { keyframes, css } from "styled-components";

const sliderMenuOpen = keyframes`
 from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0%);
    opacity: 1;
  }

`;

const sliderMenuClose = keyframes`
  from {
    transform: translateX(0%);
    opacity: 1;
  }

  to {
    transform: translateX(100%);
    opacity: 0;
    pointer-events: none;
  }
`;

export const NavContainer = styled.nav`
  z-index: 40;
  height: 100vh;
  width: 300px;
  background: #11152b;
  position: fixed;
  top: 0;
  right: 0;
  pointer-events: all;

  display: flex;
  flex-direction: column;

  padding: 20px;

  ${props =>
    props.openMenu &&
    css`
      animation: 1s ease-in-out ${sliderMenuOpen} forwards;
    `}

  ${props =>
    !props.openMenu &&
    css`
      animation: 1s ease-in-out ${sliderMenuClose} forwards;
    `}

    ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;

    li {
      display: flex;
      align-items: center;
      width: 100%;
      text-transform: capitalize;
      font-size: 1rem;
      border-bottom: 1px solid #f64747;
      padding: 10px 0;

      a {
        text-decoration: none;
        display: block;
        color: #cec9c9;
        margin: 0 10px;
        height: 24px;
      }
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 10px;
  right: 0;

  text-decoration: none;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 100%;
  height: 2.5em;
  width: 2.5em;
  line-height: 2.5em;
  color: #fff;
  text-align: center;

  cursor: pointer;

  margin: 5px 19px 5px 0;
  border: none;

  cursor: pointer;
  z-index: 99;

  :hover {
    color: rgba(255, 255, 255, 0.25);
    background: none;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25);
  }
`;
