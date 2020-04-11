import styled from "styled-components";

export const Container = styled.div`
  width: 65%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  right: -30%;

  @media screen and (max-width: 1300px) {
    width: 55%;
    right: -40%;
  }

  @media screen and (max-width: 1050px) {
    width: 50%;
    right: -45%;
  }

  @media screen and (max-width: 1000px) {
    position: static;
    margin: 0 auto;
    width: 90%;
  }
`;
