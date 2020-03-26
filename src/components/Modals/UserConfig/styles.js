import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  width: 67%;
  height: 85vh;
  top: 50%;
  transform: translate(-85%, -55%);

  left: 85%;
  /* transform: translateX(-50%); */
  position: fixed;
  z-index: 99;

  form {
    justify-content: none;
  }
`;

export const Avatar = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 100%;
  background: #dedede;
`;
