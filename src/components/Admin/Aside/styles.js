import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100vh;
  background: linear-gradient(
    to right top,
    #051937,
    #181f36,
    #232535,
    #2c2c34,
    #333333
  );
  padding: 20px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;

  position: fixed;
  top: 0;
  left: 0;

  min-width: 340px;

  @media screen and (max-width: 1000px) {
    position: static;
    margin: 0 auto;
    width: 90%;
  }

  form {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    z-index: 10;

    padding-left: 10px;

    flex-direction: row;
    height: auto;

    input {
      flex: 1;
      border: none;
      background: transparent;
      border-bottom: 1px solid #222c69;
      outline: none;

      ::placeholder {
        font-family: "Open Sans", Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #fff;
        text-transform: uppercase;
      }
    }
  }
`;

export const UserModal = styled.div`
  width: 100%;
  height: 60px;
  margin: 5px 0;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    height: 100%;
    width: 25%;
    max-width: 100px;
    max-height: 100px;

    background: transparent;
    border: none;

    cursor: pointer;

    img {
      border-radius: 100%;
      height: 100%;
      width: 100%;
    }
  }
`;

export const Search = styled.button`
  background: none;
  cursor: pointer;

  svg {
    color: #fff;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #11152b;
  }

  ::-webkit-scrollbar-thumb {
    background: #272834;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${lighten(0.1, "#11152b")};
  }

  ul {
    width: 100%;
    display: flex;
    list-style: none;
    flex-direction: column;

    li {
      width: 100%;
      display: flex;
      align-items: center;
      margin: 10px 0;

      button {
        border: none;
        background: none;
        padding: 10px 20px;
        align-self: center;
        cursor: pointer;
        color: #ffff;
        font-size: 0.9rem;

        width: 100%;
        text-align: left;

        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        border-bottom: 1px solid #dede;

        :hover {
          .left,
          right {
            width: 1px;
            height: 100%;
          }
          .top,
          .bottom {
            width: 100%;
            height: 1px;
          }
        }
      }
    }
  }

  .top,
  .bottom,
  .left,
  .right {
    position: absolute;
    transition: all 2.5s ease;
    background: #222c69;
  }

  .top,
  .bottom {
    width: 0%;
    left: 0;
  }
  .left,
  .right {
    height: 0%;
    top: 0;
  }
`;
