import styled from "styled-components";

export const Container = styled.section`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  margin: 24px 0;

  display: flex;
  flex-direction: column;

  padding: 20px;
`;

export const Project = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  margin: 5px 0;

  text-align: center;
`;

export const Image = styled.div`
  img {
    height: 250px;
    width: 250px;
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
  }

  span {
  }
`;
