import styled from "styled-components";

export const Article = styled.article`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  max-width: 60%;
  min-height: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;

  align-items: center;
  justify-content: space-between;
  z-index: 30;
  padding: 15px;

  position: relative;

  > button {
    cursor: pointer;

    svg {
      position: absolute;
      top: 10px;
      right: 10px;
      border-radius: 100%;
      background: rgba(255, 255, 255, 0.15);
      padding: 10px;
      height: 40px;
      width: 40px;
    }
  }
`;

export const Header = styled.header`
  h2 {
    margin: 0 0 0.5em 0;
    color: #fff;
  }

  span {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const Footer = styled.footer`


  > a {
      background-color: transparent;
  box-shadow: inset 0 0 0 2px rgba(144, 144, 144, 0.25);
  color: #fff;

  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  height: 2.85em;
  line-height: 2.95em;
  padding: 0 1.5em;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  text-transform: uppercase;

  margin: 15px;
  :hover {
  background-color: rgba(144, 144, 144, 0.075);
  }

  :active {
  background-color: rgba(144, 144, 144, 0.2);
}
  }

}`;

export const Description = styled.div`
  h5 {
    padding: 10px;
  }
  div {
    display: flex;
    width: 100%;
    padding: 10px;

    text-align: left;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
      text-align: center;
    }

    strong {
      color: #f64747;
    }

    span {
      margin: 0 5px;
      color: #ccc9c9;
    }
  }
`;
