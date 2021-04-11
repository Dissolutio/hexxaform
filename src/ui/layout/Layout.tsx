import React from "react";
import styled from "styled-components";
import { useBgioClientInfo } from "../../bgio-contexts";

// This component is where a player's theme is set to their player color
// ? perhaps this could be move into theme.js, but the playerID will still be dynamic....

export const Layout = ({ children }) => {
  const { playerID } = useBgioClientInfo();
  return (
    <>
      <LayoutContainer
        id={`player${playerID}`} // for linking to this player view (useful in local dev)
        playerID={playerID}
      >
        <LayoutTop>{children[0]}</LayoutTop>
        <LayoutMiddle>{children[1]}</LayoutMiddle>
        <LayoutBottom>{children[2]}</LayoutBottom>
      </LayoutContainer>
    </>
  );
};
type LayoutContainerProps = {
  playerID: string;
};
const LayoutContainer = styled.div<LayoutContainerProps>`
  //🛠 SET CSS VARS
  --player-color: ${(props) => props.theme.playerColor};
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
  background-image: url("${(props) => props.theme.bgContourLinesUrl}");
`;
const LayoutTop = styled.div`
  width: 100%;
  height: var(--navbar-height);
  background: var(--black);
`;
const LayoutMiddle = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  overflow: auto;
`;
const LayoutBottom = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  min-height: calc(100vh - 50vh - var(--navbar-height));
  padding: 5px;
  margin: 0;
  background: var(--black);
`;
