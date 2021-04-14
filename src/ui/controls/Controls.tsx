import { useMapContext } from "ui/hooks/useMapContext";
import { useBgioMoves } from "../../bgio-contexts";
import { Chat } from "./Chat";

export const Controls = () => {
  const { undo, redo } = useBgioMoves();
  const {
    showStartzones,
    toggleShowStartzones,
    showTerrain,
    toggleShowTerrain,
    isEraser,
    toggleEraserMode,
    isAddAltitudePen,
    toggleAddAltitudePen,
  } = useMapContext();
  const greenOnRedOff = (state) => {
    return state
      ? {
          color: "green",
        }
      : {
          color: "black",
        };
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <button onClick={undo}>UNDO</button>
      <button onClick={redo}>REDO</button>
      <button
        style={greenOnRedOff(showStartzones)}
        onClick={toggleShowStartzones}
      >
        TOGGLE SHOW STARTZONES
      </button>
      <button style={greenOnRedOff(showTerrain)} onClick={toggleShowTerrain}>
        TOGGLE SHOW TERRAIN
      </button>
      <button style={greenOnRedOff(isEraser)} onClick={toggleEraserMode}>
        TOGGLE ERASER
      </button>
      <button
        style={greenOnRedOff(isAddAltitudePen)}
        onClick={toggleAddAltitudePen}
      >
        TOGGLE Add Altitude Pen
      </button>
      <Chat />
    </div>
  );
};
