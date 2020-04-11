import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  flex-direction: ${(props) => (props.isHome ? "column" : "row")};
`;
