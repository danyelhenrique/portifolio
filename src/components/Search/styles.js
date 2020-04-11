import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  align-items: center;

  form {
    flex-direction: row;
    justify-content: flex-start;

    input {
      border: none;
      background: none;
      border-bottom: 1px solid #fff;
      outline: none;

      ::placeholder {
        text-transform: lowercase;
        color: #6a6a6f;
      }
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  }
`;
