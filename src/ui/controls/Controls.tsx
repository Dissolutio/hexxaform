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
import { giantsTableMap } from "assets/giants-table-map";

export const Controls = () => {
  const {
    showStartzones,
    toggleShowStartzones,
    showTerrain,
    toggleShowTerrain,
    toggleEraserPen,
    toggleIncAltitudePen,
    toggleDecAltitudePen,
    toggleWaterPen,
    toggleGrassPen,
    toggleSandPen,
    toggleRockPen,
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
        <button aria-label="Eraser" onClick={toggleEraserPen}>
          <FaEraser />
        </button>
        <button aria-label="Increase Altitude" onClick={toggleIncAltitudePen}>
          <GiUpCard />
        </button>
        <button aria-label="Decrease Altitude" onClick={toggleDecAltitudePen}>
          <GiUpCard style={flipOverStyle} />
        </button>
        <button aria-label="Water" onClick={toggleWaterPen}>
          <GiWaterSplash />
        </button>
        <button aria-label="Grass" onClick={toggleGrassPen}>
          <GiGrass />
        </button>
        <button aria-label="Sand" onClick={toggleSandPen}>
          <GiIsland />
        </button>
        <button aria-label="Rock" onClick={toggleRockPen}>
          <GiFallingRocks />
        </button>
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
          onClick={() =>
            loadMap(giantsTableMap.boardHexes, giantsTableMap.hexMap)
          }
        >
          Load Giants Table Map
        </button>
      </StyledSection>
    </>
  );
};

const StyledSection = styled.section`
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
