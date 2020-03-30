import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: ${props => (props.isOpen ? 1 : 0)};
  pointer-events: ${props => (props.isOpen ? "all" : "none")};

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
  background: #fff;
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

  form {
    justify-content: normal;
    height: auto;

    label {
      margin: 15px 0;
    }
    button {
      text-transform: uppercase;
      font-weight: bold;
      padding: 30px 150px;
      border-radius: 5px;
      background: #192036;
      border: none;

      color: #fff;
      cursor: pointer;
    }
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  color: #7159c1;
  cursor: pointer;

  margin: 40px 0;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;

  img {
    height: 150px;
    width: 150px;
    border-radius: 100%;
    background: #dedede;
  }

  span {
    color: #192036;
    font-size: 52px;
  }

  button {
    background: none;
    border: none;
    align-self: flex-start;
    cursor: pointer;

    svg {
    }
  }
`;
