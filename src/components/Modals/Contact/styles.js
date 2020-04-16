import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  width: 400px;
  min-width: 40vw;
  margin: 0 auto;

  background: #fff;
  height: 80vh;
  z-index: 99;

  padding: 30px;
  border-radius: 5px;

  form {
    label {
      height: auto;

      textarea {
        resize: vertical;
        border: 4px double rgb(0, 0, 0);
        outline: none;
        background: #fff;
        color: #2f2f33;
        max-height: 220px;
        min-height: 150px;

        ::-webkit-scrollbar {
          width: 16px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: #dedede;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${darken(0.3, "#f7f7f7")};
        }
      }
    }

    button {
      background: #f64747;
      padding: 20px 90px;
      border-radius: 5px;
      font-weight: bold;
      text-transform: uppercase;
      color: #ffffff;
      padding: 25px 100px;
      width: 100%;

      cursor: pointer;

      transition: background 1.5s ease;

      :hover {
        background: ${darken(0.1, "#f64747")};
      }
    }
  }
`;

export const Button = styled.button``;
