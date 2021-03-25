import React from "react";
import styled from "styled-components";

export const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};
const LayoutContainer = styled.div`
  --player-color: #e4572e;
  --navbar-height: 46px;
  --navbar-logo-height: 32px;

  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  color: var(--player-color);
  background-image: url("${(props) => props.theme.bgContourLines}");
`;
