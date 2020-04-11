import styled from "styled-components";
import { lighten } from "polished";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? "all" : "none")};

  transition: all 1s ease;

  width: 100vw;
  height: 100vh;

  position: fixed;
  z-index: 10;

  backdrop-filter: blur(10px);

  z-index: 999;

  background: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  background: #192036;
  border-radius: 5px;
  width: 67%;
  height: 85vh;

  left: 85%;
  z-index: 99;

  padding: 20px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #11152b;
  }

  ::-webkit-scrollbar-thumb {
    background: #272834;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${lighten(0.1, "#11152b")};
  }

  @media screen and (max-width: 1000px) {
    height: 100vh;
    width: 90%;

    overflow-y: scroll;
    overflow-x: hidden;
    margin: 0 auto;
  }

  form {
    justify-content: normal;
    height: auto;

    label {
      margin: 15px 0;

      input {
        background: none;
        color: #fff;
      }
    }
  }
`;

export const Button = styled.button`
  outline: none;

  margin: 40px 0;

  text-transform: uppercase;
  font-weight: bold;
  padding: 30px 150px;
  border-radius: 5px;
  background: #11152b;
  border: none;

  color: #fff;
  cursor: pointer;
  transition: background 0.4s ease-in;

  :hover {
    background: ${lighten(0.2, "#11152b")};
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  img {
    height: 150px;
    width: 150px;
    border-radius: 100%;
    background: #dedede;
  }

  h2 {
    color: #fff;
    font-size: 52px;
    text-transform: none;
  }

  button {
    background: none;
    border: none;
    align-self: flex-start;
    cursor: pointer;

    @media screen and (max-width: 1000px) {
      align-self: flex-end;
    }

    svg {
      color: #9c9c9c;
      transition: color 0.4s ease-in;
    }

    :hover {
      svg {
        color: ${lighten(0.2, "#9c9c9c")};
      }
    }
  }
`;
