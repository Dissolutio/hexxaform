import styled from "styled-components";
import { MapDisplay } from "../hexmap";
import { Controls } from "../controls";

export const Layout = () => {
  return (
    <LayoutContainer>
      <LayoutMiddle>
        <MapDisplay />
      </LayoutMiddle>
      <LayoutBottom>
        <Controls />
      </LayoutBottom>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  //🛠 SET CSS VARS
  --player-color: ${(props) => props.theme.playerColor};

  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  min-height: 100vh;
  padding: 0;
  margin: 0 auto;
  color: var(--player-color);
  background-image: url("${(props) => props.theme.bgContourLinesUrl}");
`;
const LayoutMiddle = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
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
