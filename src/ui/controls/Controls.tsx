import styled from "styled-components";
import { FaEraser } from "react-icons/fa";
import {
  GiUpCard,
  GiWaterSplash,
  GiGrass,
  GiIsland,
  GiFallingRocks,
} from "react-icons/gi";

import { useMapContext } from "ui/hooks/useMapContext";
import { useBgioMoves } from "bgio-contexts";
import giantsTable from "assets/giantsTable.json";

export const Controls = () => {
  const {
    showStartzones,
    toggleShowStartzones,
    showTerrain,
    toggleShowTerrain,
    toggleEraserPen,
    toggleEraserStartZonePen,
    toggleIncAltitudePen,
    toggleDecAltitudePen,
    toggleWaterPen,
    toggleGrassPen,
    toggleSandPen,
    toggleRockPen,
    toggleStartZonePen,
  } = useMapContext();
  const { moves } = useBgioMoves();
  const { loadMap } = moves;
  const greenOnRedOff = (state) => {
    return state
      ? {
          color: "green",
        }
      : {
          color: "black",
        };
  };
  const flipOverStyle = { transform: "translateY(0.2em) rotate(180deg)" };
  return (
    <>
      <StyledSection>
        <h4>Set Pen Mode:</h4>
        <StyledButton
          aria-label="Increase Altitude"
          onClick={toggleIncAltitudePen}
        >
          <GiUpCard />
          <span>Raise</span>
        </StyledButton>
        <StyledButton
          aria-label="Decrease Altitude"
          onClick={toggleDecAltitudePen}
        >
          <GiUpCard style={flipOverStyle} />
          <span>Lower</span>
        </StyledButton>
        <StyledButton aria-label="Eraser" onClick={toggleEraserPen}>
          <FaEraser />
          <span>Eraser</span>
        </StyledButton>
        <StyledButton aria-label="Water" onClick={toggleWaterPen}>
          <GiWaterSplash />
          <span>Water</span>
        </StyledButton>
        <StyledButton aria-label="Grass" onClick={toggleGrassPen}>
          <GiGrass />
          <span>Grass</span>
        </StyledButton>
        <StyledButton aria-label="Sand" onClick={toggleSandPen}>
          <GiIsland />
          <span>Sand</span>
        </StyledButton>
        <StyledButton aria-label="Rock" onClick={toggleRockPen}>
          <GiFallingRocks />
          <span>Rock</span>
        </StyledButton>
      </StyledSection>

      <StyledSection>
        <h4>Set Pen Mode to Player StartZone:</h4>
        <StyledButton
          aria-label="Start Zone 0"
          onClick={() => toggleStartZonePen("0")}
        >
          0
        </StyledButton>
        <StyledButton
          aria-label="Start Zone 1"
          onClick={() => toggleStartZonePen("1")}
        >
          1
        </StyledButton>
        <StyledButton
          aria-label="Start Zone 2"
          onClick={() => toggleStartZonePen("2")}
        >
          2
        </StyledButton>
        <StyledButton
          aria-label="Start Zone 3"
          onClick={() => toggleStartZonePen("3")}
        >
          3
        </StyledButton>
        <StyledButton
          aria-label="Start Zone 4"
          onClick={() => toggleStartZonePen("4")}
        >
          4
        </StyledButton>
        <StyledButton
          aria-label="Start Zone 5"
          onClick={() => toggleStartZonePen("5")}
        >
          5
        </StyledButton>
        <StyledButton
          aria-label="Start Zone"
          onClick={() => toggleEraserStartZonePen()}
        >
          Erase Start Zones
        </StyledButton>
      </StyledSection>

      <StyledSection>
        <h4>Toggle Lenses:</h4>
        <button
          style={greenOnRedOff(showStartzones)}
          onClick={toggleShowStartzones}
        >
          STARTZONES
        </button>
        <button style={greenOnRedOff(showTerrain)} onClick={toggleShowTerrain}>
          TERRAIN
        </button>
      </StyledSection>
      <StyledSection>
        <h4>Load Map:</h4>
        <button
          onClick={() => loadMap(giantsTable.boardHexes, giantsTable.hexMap)}
        >
          Load Giants Table Map
        </button>
      </StyledSection>
    </>
  );
};

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em 0;
  h4 {
    padding: 5px;
    margin: 0;
    font-size: 1rem;
  }
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
