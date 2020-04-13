import styled from "styled-components";

export const Project = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  margin: 5px 0;

  text-align: center;

  height: 250px;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    border-bottom: 1px solid #dedede;
    padding: 30px 0;
    height: auto;
  }
`;

export const Image = styled.div`
  position: relative;
  height: 100%;

  img {
    height: 100%;
    width: 250px;
    border-radius: 5px;
  }

  :hover {
    button {
      opacity: 1;
    }
  }

  button {
    opacity: 0;
    background: none;
    border: none;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 100%;
    width: 100%;
    cursor: pointer;

    border-radius: 5px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  line-height: calc(1rem * 1.5);
  color: rgb(115, 115, 128);

  margin: 0 20px;

  h4 {
    font-weight: bold;
    color: rgb(86, 86, 95);
    margin: 0;
  }

  h5 {
    color: #777676;
  }
`;
