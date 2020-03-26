import styled from "styled-components";

export const Container = styled.div`
  z-index: 9;
  height: 100%;
  width: 100%;
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
