import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { Text } from "react-hexgrid";

import { PenMode, useMapContext } from "../hooks/useMapContext";
import { BoardHex, HexTerrain } from "../../game/types";
import { useBgioG } from "../bgio-contexts/useBgioG";
import { useBgioMoves } from "../bgio-contexts/useBgioMoves";
import Hexagon from "./Hexagon";

type MapHexesProps = {
  hexSize: number;
};

export const MapHexes = ({ hexSize }: MapHexesProps) => {
  const { G } = useBgioG();
  const { boardHexes } = G;
  const { moves } = useBgioMoves();
  const {
    voidHex,
    unVoidHex,
    voidStartZone,
    paintStartZone,
    incAltitudeOfHex,
    decAltitudeOfHex,
    paintWaterHex,
    paintGrassHex,
    paintSandHex,
    paintRockHex,
  } = moves;
  const {
    selectedMapHex,
    showStartzones,
    showTerrain,
    penMode,
    altitudeViewer,
    penThickness,
  } = useMapContext();

  const onClickBoardHex = (event: SyntheticEvent, hex: BoardHex) => {
    const isVoidTerrainHex = hex.terrain === HexTerrain.void;
    if (penMode === PenMode.eraser) {
      isVoidTerrainHex
        ? unVoidHex({ hexID: hex.id })
        : voidHex({ hexID: hex.id });
    }
    if (penMode === PenMode.eraserStartZone) {
      voidStartZone({ hexID: hex.id });
    }
    // last letter in string is playerID, but this seems inelegant
    if (penMode.slice(0, -1) === "startZone") {
      paintStartZone({ hexID: hex.id, playerID: penMode.slice(-1) });
    }
    if (penMode === PenMode.incAltitude && !isVoidTerrainHex) {
      /*
      // if we are raising from level 0 to level 1, and it's a water hex, then turn it to grass, like parting the seas
      if (hex.altitude === 1) {
        paintGrassHex(hex.id);
      }
      */
      incAltitudeOfHex({ hexID: hex.id });
    }
    if (penMode === PenMode.decAltitude && !isVoidTerrainHex) {
      decAltitudeOfHex({ hexID: hex.id });
      /*
      // when decreasing altitude on a level 1 hex to level 0, turn it to water, like digging a well
      if (hex.altitude === 1) {
        paintWaterHex(hex.id);
      }
      */
    }
    if (penMode === PenMode.water) {
      paintWaterHex({ hexID: hex.id });
    }
    if (penMode === PenMode.grass) {
      paintGrassHex({ hexID: hex.id, thickness: penThickness });
    }
    if (penMode === PenMode.sand) {
      paintSandHex({ hexID: hex.id, thickness: penThickness });
    }
    if (penMode === PenMode.rock) {
      paintRockHex({ hexID: hex.id, thickness: penThickness });
    }
  };
  function calcClassNames(hex: BoardHex) {
    // blank start
    let classNames = "maphex";
    // helper fn
    const isSelectedHex = (hex: BoardHex) => {
      return hex.id === selectedMapHex;
    };
    // Highlight Selected Hex
    if (isSelectedHex(hex)) {
      classNames = classNames.concat(" maphex__selected--active ");
    }
    // Paint Terrain
    if (showTerrain) {
      classNames = classNames.concat(` maphex__terrain--${hex.terrain} `);
    }
    // Opacify everything below current altitude viewer level
    if (altitudeViewer > hex.altitude) {
      classNames = classNames.concat(` maphex__terrain--opacify `);
    }
    // Highlight Player Startzones -- if toggled on
    if (showStartzones) {
      ["0", "1", "2", "3", "4", "5"].forEach((playerID) => {
        if (hex?.startzonePlayerIDs?.includes(playerID)) {
          classNames = classNames.concat(
            ` maphex__startzone--player${playerID} `
          );
        }
      });
    }
    // final className!
    return classNames;
  }

  return (
    <>
      {Object.values(boardHexes).map((hex, i) => {
        const { altitude } = hex;
        return (
          <StyledHexagon
            key={i}
            data-hex={`${hex.q},${hex.r},${hex.s}`}
            altitude={hex.altitude}
          >
            <Hexagon
              q={hex.q}
              r={hex.r}
              s={hex.s}
              data={hex}
              onClick={(e) => onClickBoardHex(e, hex)}
              className={calcClassNames(hex)}
            >
              <g>
                {/* <HexIDText hexSize={hexSize} text={hex.id} /> */}
                {hex.terrain === HexTerrain.void ? null : (
                  <HexIDText hexSize={hexSize} text={`${hex.id}`} />
                )}
              </g>
            </Hexagon>
          </StyledHexagon>
        );
      })}
      <StyledPolygon points="12.990381,7.499999999999999 9.18485099360515e-16,15 -12.990381056766577,7.500000000000005 -12.990381056766582,-7.499999999999996 -2.7554552980815444e-15,-15 12.990381056766582,-7.499999999999995"></StyledPolygon>
    </>
  );
};
const StyledPolygon = styled.polygon`
  stroke: var(--neon-red);
  stroke: red;
  stroke-width: 5;
  fill: yellow;
`;
const HexIDText = ({ hexSize, text }: { hexSize: number; text: string }) => {
  return (
    <Text className="maphex_text" y={hexSize * 0.7}>
      {text}
    </Text>
  );
};

const StyledHexagon = styled.g<{ altitude: number }>`
  polygon {
    stroke: gray;
    stroke-width: ${(props) => {
      let start = props.altitude;
      let acc = 0;
      if (start > 6) {
        acc = 6 * 0.3;
        start = start - 6;
      } else {
        acc = start * 0.3;
        start = 0;
      }
      acc += start * 0.1;
      return `${acc}`;
    }};
    cursor: pointer;
  }
`;
