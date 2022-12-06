import { ReactNode } from "react";
import styled from "styled-components";

export const Layout = ({ children }: { children: ReactNode[] }) => {
  return (
    <LayoutContainer>
      <LayoutMiddle>{children[0]}</LayoutMiddle>
      <LayoutBottom>
        {children[1]}
        {children[2]}
      </LayoutBottom>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  // SET CSS VARS
  --player-color: ${(props) => props.theme.playerColor};
  // Perspective makes this element the parent for position sticky children
  // see: https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed
  perspective: 1000px;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* max-width: 800px; */
  min-height: 100vh;
  padding: 0;
  margin: 0 auto;
  color: var(--player-color);
  background-image: url("${(props) => props.theme.bgContourLinesUrl}");
`;
const LayoutMiddle = styled.div`
  width: 100%;
  height: 70vh;
  overflow: auto;
`;
const LayoutBottom = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  min-height: 30vh;
  padding: 5px;
  margin: 0;
  background: var(--black);
`;
