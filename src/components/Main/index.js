import React from "react";
import { MainContainer } from "./styles";
import { useLocation } from "react-router-dom";
export default function Main({ children }) {
  const router = useLocation();

  return (
    <MainContainer isHome={router.pathname === "/"}>{children}</MainContainer>
  );
}
