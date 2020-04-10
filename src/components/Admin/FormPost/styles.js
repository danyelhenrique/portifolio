import styled from "styled-components";
import { lighten, darken } from "polished";

export const Container = styled.div`
  z-index: 9;
  height: 100%;
  width: 100%;

  form {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

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
      transition: background 0.2 ease;

      :hover {
        background: ${darken(0.05, "#192036")};
      }
    }
    textarea {
      resize: vertical;
      border: 4px double rgb(0, 0, 0);
      color: #000;
      outline: none;
    }

    label {
      height: auto;
      margin: 5px 0;
    }

    button[type="button"] {
      background: #11152b;
      color: #f64747;

      :hover {
        background: ${lighten(0.05, "#11152b")};
      }
    }
  }
`;
