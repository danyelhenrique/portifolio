import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: rgb(49, 49, 49);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
  color: rgb(255, 255, 255);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: Roboto;
  min-width: 288px;
  max-width: 568px;
  pointer-events: initial;
  transition-property: transform;
  transition-duration: 220ms;
  transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
  transform-origin: center bottom;
  z-index: 2;
  transform: translate3d(0px, 0px, 0px) scale(1);
  border-radius: 2px;
  padding: 6px 24px;

  width: 50vw;
`;
