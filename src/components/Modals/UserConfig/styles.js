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
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  width: 67%;
  height: 85vh;

  left: 85%;
  z-index: 99;

  padding: 20px;

  form {
    justify-content: normal;
    height: auto;

    label {
      margin: 15px 0;
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
