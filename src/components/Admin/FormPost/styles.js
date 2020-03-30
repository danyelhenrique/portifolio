import styled from "styled-components";

export const Container = styled.div`
  z-index: 9;
  height: 100%;
  width: 100%;

  form {
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

export const ToastMessage = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  width: 100%;
  text-transform: uppercase;

  button {
    background: none;
    border: none;
    outline: none;
    color: #7159c1;
    cursor: pointer;
  }
`;
