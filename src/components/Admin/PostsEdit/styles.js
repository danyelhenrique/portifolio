import styled from "styled-components";

export const Container = styled.section`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  height: auto;
  margin: 24px 0;
  /* margin: auto; */

  display: flex;

  > div {
    width: 100%;
    color: #000;
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    padding: 15px;
  }

  .ck.ck-editor__top .ck-sticky-panel .ck-toolbar {
    border-bottom-width: none;
  }

  .ck.ck-editor__main > .ck-editor__editable:not(.ck-focused) {
    border: none;
    outline: none;
  }

  .ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused,
  .ck-focused,
  .ck-editor__main {
    outline: none;
    box-shadow: none;
    border: none;
  }

  .ck.ck-editor__top .ck-sticky-panel .ck-toolbar {
    border: none;
  }

  .ck-sticky-panel__content {
    border: 1px solid #e8e3e3;
  }
`;
