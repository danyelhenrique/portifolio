import styled from "styled-components";
import { Form as UForm } from "@unform/web";

export const Form = styled(UForm)`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  label {
    height: 30px;
    width: 100%;

    display: flex;
    flex-direction: column;

    text-align: left;
    text-transform: capitalize;

    color: #757474;

    input {
      display: block;
      flex: 1;
      color: #000;

      border: none;
      border-bottom: 3px double #262835;
      font-weight: 400;
      outline: none;
    }
  }

  /* button {
    text-transform: uppercase;
    font-weight: bold;
    padding: 30px 150px;
    border-radius: 5px;
    background: #192036;
    border: none;

    color: #fff;
    cursor: pointer;
  } */
`;
