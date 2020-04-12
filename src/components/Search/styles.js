import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  form {
    transition: width 2s ease;
    width: ${({ show }) => (show ? "100%" : "0%")};
    border-bottom: 1px solid #fff;

    input {
      opacity: ${({ show }) => (show ? 1 : 0)};
      display: ${({ show }) => (show ? "block" : "none")};
    }

    #btn-cancel {
      opacity: ${({ show }) => (show ? 1 : 0)};
      transition: ${({ show }) =>
        show ? "opacity 4s ease" : "opacity 0.4ms ease"};
    }
  }

  form {
    flex-direction: row;
    justify-content: flex-start;

    input {
      border: none;
      background: none;
      outline: none;

      flex: 1;

      height: 100%;

      ::placeholder {
        text-transform: lowercase;
        color: #6a6a6f;
      }
    }

    button {
      background: none;
      border: none;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      height: 100%;

      /* border-bottom: 1px solid #fff; */
    }
  }
`;
