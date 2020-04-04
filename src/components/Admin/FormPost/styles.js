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
      margin: 10px 0;
    }

    label {
      height: auto;
      margin: 5px 0;
    }

    textarea {
      resize: vertical;
      border: 4px double rgb(0, 0, 0);
      color: #000;
      outline: none;
    }
  }
`;
