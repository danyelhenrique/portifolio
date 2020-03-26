import styled, { keyframes } from "styled-components";

const more = keyframes`
    from{
        bottom: 15px;
    }
   
    to {
        bottom: 25px;
    }
`;

export const Next = styled.a`
  animation: ${more} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  background-color: rgba(255, 255, 255, 0.15);
  border: 0;
  border-radius: 1em 1em 0 0;
  color: rgba(255, 255, 255, 0.75);
  display: block;
  left: 50%;
  border-radius: 100%;
  text-decoration: none;

  position: absolute;

  cursor: pointer;

  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: none;
    color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.5);
  }

  ::before {
    color: rgba(255, 255, 255, 0.5);
  }
`;
