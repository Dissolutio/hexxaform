import styled from "styled-components";
import { FaEraser } from "react-icons/fa";
import {
  GiUpCard,
  GiWaterSplash,
  GiGrass,
  GiIsland,
  GiFallingRocks,
} from "react-icons/gi";

import { PenMode, useMapContext } from "../hooks/useMapContext";
import { useBgioG, useBgioMoves } from "../bgio-contexts";
import giantsTable from "../../assets/giantsTable.json";
import { useLocalMapMemory } from "../hooks/useLocalMapMemory";
import { UndoRedo } from "./UndoRedo";

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
    penMode,
  } = useMapContext();
  const { moves } = useBgioMoves();
  const { loadMap } = moves;
  const greenOnRedOff = (state: boolean) => {
    return state
      ? {
          boxShadow: `0 0 2px var(--white)`,
          border: `1px solid var(--white)`,
          backgroundColor: `var(--selected-green)`,
        }
      : {};
  };
  const flipOverStyle = { transform: "translateY(0.2em) rotate(180deg)" };
  const activeStyle = (mode: string) => {
    return mode === penMode
      ? {
          boxShadow: `0 0 2px var(--white)`,
          border: `1px solid var(--white)`,
          backgroundColor: `var(--selected-green)`,
        }
      : {};
  };
  return (
    <StyledGrid>
      <StyledSection>
        <h4>Undo/Redo:</h4>
        <UndoRedo />
      </StyledSection>

      <StyledSection>
        <h4>Set Pen Mode:</h4>
        <StyledButton
          aria-label="Increase Altitude"
          onClick={toggleIncAltitudePen}
          style={activeStyle(PenMode.incAltitude)}
        >
          <GiUpCard />
          <span>Raise</span>
        </StyledButton>
        <StyledButton
          aria-label="Decrease Altitude"
          onClick={toggleDecAltitudePen}
          style={activeStyle(PenMode.decAltitude)}
        >
          <GiUpCard style={flipOverStyle} />
          <span>Lower</span>
        </StyledButton>
        <StyledButton
          aria-label="Eraser"
          style={activeStyle(PenMode.eraser)}
          onClick={toggleEraserPen}
        >
          <FaEraser />
          <span>Eraser</span>
        </StyledButton>
        <StyledButton
          aria-label="Water"
          style={activeStyle(PenMode.water)}
          onClick={toggleWaterPen}
        >
          <GiWaterSplash />
          <span>Water</span>
        </StyledButton>
        <StyledButton
          aria-label="Grass"
          style={activeStyle(PenMode.grass)}
          onClick={toggleGrassPen}
        >
          <GiGrass />
          <span>Grass</span>
        </StyledButton>
        <StyledButton
          aria-label="Sand"
          style={activeStyle(PenMode.sand)}
          onClick={toggleSandPen}
        >
          <GiIsland />
          <span>Sand</span>
        </StyledButton>
        <StyledButton
          aria-label="Rock"
          style={activeStyle(PenMode.rock)}
          onClick={toggleRockPen}
        >
          <GiFallingRocks />
          <span>Rock</span>
        </StyledButton>
      </StyledSection>

      <StyledSection>
        <h4>Set Pen Mode to Player StartZone:</h4>
        <StyledButton
          aria-label="Start Zone 0"
          onClick={() => toggleStartZonePen("0")}
          style={activeStyle(PenMode.startZone0)}
        >
          0
        </StyledButton>
        <StyledButton
          aria-label="Start Zone 1"
          onClick={() => toggleStartZonePen("1")}
          style={activeStyle(PenMode.startZone1)}
        >
          1
        </StyledButton>
        <StyledButton
          aria-label="Start Zone 2"
          onClick={() => toggleStartZonePen("2")}
          style={activeStyle(PenMode.startZone2)}
        >
          2
        </StyledButton>
        <StyledButton
          aria-label="Start Zone 3"
          onClick={() => toggleStartZonePen("3")}
          style={activeStyle(PenMode.startZone3)}
        >
          3
        </StyledButton>
        <StyledButton
          aria-label="Start Zone 4"
          onClick={() => toggleStartZonePen("4")}
          style={activeStyle(PenMode.startZone4)}
        >
          4
        </StyledButton>
        <StyledButton
          aria-label="Start Zone"
          onClick={() => toggleEraserStartZonePen()}
          style={activeStyle(PenMode.eraserStartZone)}
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
        <h4>Load/Save Maps:</h4>
        <LoadSaveMapButtons />
      </StyledSection>
      <StyledSection>
        <h4>Example Maps:</h4>
        <button
          onClick={() =>
            loadMap({
              boardHexes: giantsTable.boardHexes,
              hexMap: giantsTable.hexMap,
            })
          }
        >
          Load Giants Table Map
        </button>
      </StyledSection>
    </StyledGrid>
  );
};
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
`;
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

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoadSaveMapButtons = () => {
  const { G } = useBgioG();
  const { boardHexes, hexMap } = G;
  // const manipulatedBoardHexes = keyBy(
  //   Object.values(boardHexes).map((hex) => ({
  //     ...hex,
  //     startzonePlayerIDs: [],
  //   })),
  //   "id"
  // );
  // const manipulatedHexMap = {
  //   boardHexes: manipulatedBoardHexes,
  //   hexMap: hexMap,
  // };
  const currentSaveableMap = { boardHexes, hexMap };
  const { map1, setMap1, map2, setMap2, map3, setMap3 } = useLocalMapMemory();
  const { moves } = useBgioMoves();
  const handleLoadMap1 = () =>
    moves.loadMap({ boardHexes: map1.boardHexes, hexMap: map1.hexMap });
  const handleLoadMap2 = () =>
    moves.loadMap({ boardHexes: map2.boardHexes, hexMap: map2.hexMap });
  const handleLoadMap3 = () =>
    moves.loadMap({ boardHexes: map3.boardHexes, hexMap: map3.hexMap });
  const handleSaveMap1 = () => setMap1(currentSaveableMap);
  const handleSaveMap2 = () => setMap2(currentSaveableMap);
  const handleSaveMap3 = () => setMap3(currentSaveableMap);
  return (
    <>
      <button onClick={handleLoadMap1}>Load Map 1</button>
      <button onClick={handleSaveMap1}>Save Map 1</button>
      <button onClick={handleLoadMap2}>Load Map 2</button>
      <button onClick={handleSaveMap2}>Save Map 2</button>
      <button onClick={handleLoadMap3}>Load Map 3</button>
      <button onClick={handleSaveMap3}>Save Map 3</button>
    </>
  );
};
