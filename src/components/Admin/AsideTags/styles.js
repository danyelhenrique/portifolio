import styled from "styled-components";

export const AsideItem = styled.div`
  width: 100%;
  position: relative;

  span {
    text-transform: capitalize;
  }
`;

export const BorderTop = styled.div.attrs({
  className: "border top"
})`
  top: 0;
`;

export const BorderBottom = styled.div.attrs({
  className: "border bottom"
})`
  bottom: 0;
`;

export const BorderLeft = styled.div.attrs({
  className: "border left"
})`
  left: 0;
`;

export const BorderRight = styled.div.attrs({
  className: "border right"
})`
  right: 0;
`;
