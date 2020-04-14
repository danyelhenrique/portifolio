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
      outline: none;
      background: #2f2f33;
      color: #dedede;

      ::-webkit-scrollbar {
        width: 16px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background: #f7f7f7;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${darken(0.3, "#f7f7f7")};
      }
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

export const Section = styled.section.attrs({
  id: "section-form",
})`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  height: auto;
  margin: 24px 0;

  display: flex;

  > div {
    width: 100%;
    color: #000;
    padding: 15px;
  }
`;
