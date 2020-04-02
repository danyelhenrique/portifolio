import styled from "styled-components";

export const Filters = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  width: 100%;

  position: sticky;
  top: 0;

  z-index: 10;
  padding: 10px 0px;

  background: ${({ background }) =>
    background
      ? "linear-gradient( to right,#1d2135, #212436, #242635,#272835, #282934 )"
      : "linear-gradient(to right, #262734, #2a2a35, #2c2c34, #2d2d34, #313133 )"};
`;

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

export const FilterContainer = styled.div`
  display: flex;
  margin: 10px 0;
  flex-wrap: wrap;
`;

export const Filter = styled.div`
  border: 1px solid #6a6a6f;
  position: relative;
  height: 24px;

  display: flex;

  margin: 5px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #fff;
    padding: 1px 17px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      opacity: 0;
      display: none;
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    span {
      opacity: 1;
      display: block;
    }

    :hover {
      svg {
        opacity: 1;
        display: block;
      }

      span {
        opacity: 0;
        /* display: none; */
      }
    }
  }
`;

export const Container = styled.section`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  margin: 24px 0;

  display: flex;
  flex-direction: column;

  padding: 20px;
`;
