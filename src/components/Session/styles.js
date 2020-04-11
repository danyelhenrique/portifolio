import styled, { keyframes } from "styled-components";
import { darken } from "polished";

export const Section = styled.section`
  height: 100vh;
  width: 100vw;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to right top,
    #051937,
    #181f36,
    #232535,
    #2c2c34,
    #333333
  );

  position: relative;
`;

export const BorderContent = styled.div``;

export const Container = styled.div`
  height: 60vh;
  width: 30vw;
  max-width: 550px;
  min-width: 410px;
  min-height: 400px;
  max-height: 500px;
  position: relative;
  background: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px;

  form {
    padding: 20px;
    width: 100%;

    justify-content: center;

    span {
      font-size: 0.9rem;
      color: #807e7e;
      align-self: flex-start;
      margin: 10px 0;

      button {
        color: #f64747;
        background: none;
        border: none;
        font-weight: 600;
        margin: 0 5px;

        outline: none;

        cursor: pointer;

        :hover {
          color: ${darken(0.2, "#f64747")};
        }
      }
    }

    label {
      position: relative;
      margin: 25px 0;

      input {
        padding: 0 24px;
      }

      svg {
        position: absolute;
        top: 50%;
        transform: translateY(30%);
        color: #f64747;
      }
    }
  }
`;

const animtationBtn = keyframes`
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    transform: translateX(10px);
  }
  80% {
    transform: translateX(8px);
  }
  90% {
    transform: translateX(-8px);
  }

`;

export const Submit = styled.button`
  background: #e02727;
  border: none;
  cursor: pointer;
  outline: none;
  margin: 10px 0;
  color: #cec9c9;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
  border-radius: 5px;
  border-top-left-radius: 5px;

  width: 100%;
  height: 65px;

  :hover {
    animation: ${animtationBtn} 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      both;
  }
`;

export const PasswordIcon = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;

  cursor: pointer;
  outline: none;

  transform: translateY(30%);

  svg {
    color: #f64747;
  }
`;
