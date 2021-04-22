import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { Hexagon, Text } from "react17-hexgrid";

import { BoardHex, HexTerrain } from "game/types";
import { useBgioG, useBgioMoves } from "bgio-contexts";
import { useMapContext } from "ui/hooks/useMapContext";
import { PenMode } from "../hooks/useMapContext";

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
  } = useMapContext();

  const onClickBoardHex = (event: SyntheticEvent, hex: BoardHex) => {
    const isVoidTerrainHex = hex.terrain === HexTerrain.void;
    console.log(`🚀 ~ onClickBoardHex ~ penMode`, penMode);
    if (penMode === PenMode.eraser) {
      isVoidTerrainHex ? unVoidHex(hex.id) : voidHex(hex.id);
    }
    if (penMode === PenMode.eraserStartZone) {
      voidStartZone(hex.id);
    }
    // last letter in string is playerID, but this seems inelegant
    if (penMode.slice(0, -1) === "startZone") {
      paintStartZone(hex.id, penMode.slice(-1));
    }
    if (penMode === PenMode.incAltitude && !isVoidTerrainHex) {
      incAltitudeOfHex(hex.id);
    }
    if (penMode === PenMode.decAltitude && !isVoidTerrainHex) {
      // decrease altitude on a level 1 hex, turn it to level 0 water
      if (hex.altitude === 1) {
        decAltitudeOfHex(hex.id);
        paintWaterHex(hex.id);
      }
    }
    if (penMode === PenMode.water) {
      paintWaterHex(hex.id);
    }
    if (penMode === PenMode.grass) {
      paintGrassHex(hex.id);
    }
    if (penMode === PenMode.sand) {
      paintSandHex(hex.id);
    }
    if (penMode === PenMode.rock) {
      paintRockHex(hex.id);
    }
  };
  function calcClassNames(hex: BoardHex) {
    // blank start
    let classNames = "";
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

  const hexJSX = () => {
    return Object.values(boardHexes).map((hex: BoardHex, i) => {
      const { altitude } = hex;
      return (
        <StyledHexagon key={i} altitude={hex.altitude}>
          <Hexagon
            hex={hex}
            onClick={(e) => onClickBoardHex(e, hex)}
            className={calcClassNames(hex)}
          >
            <g>
              {/* <HexIDText hexSize={hexSize} text={hex.id} /> */}
              {hex.terrain === HexTerrain.void ? null : (
                <HexIDText hexSize={hexSize} text={altitude} />
              )}
            </g>
          </Hexagon>
        </StyledHexagon>
      );
    });
  };
  return <>{hexJSX()}</>;
};

const HexIDText = ({ hexSize, text }) => {
  return (
    <Text className="maphex_text" y={hexSize * 0.7}>
      {text.toString()}
    </Text>
  );
};

const StyledHexagon = styled.g`
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
