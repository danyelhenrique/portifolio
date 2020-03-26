import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  width: 100%;

  align-items: center;
  display: flex;
  justify-content: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  border-top: 0;
  min-height: 100vh;
  position: relative;
  text-align: center;
  overflow: hidden;

  background: url("${props => props.background && props.background}");
  z-index: 10;

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
