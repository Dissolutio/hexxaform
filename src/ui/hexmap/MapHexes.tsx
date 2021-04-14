import React, { SyntheticEvent } from "react";
import { Hexagon, Text } from "react17-hexgrid";

import { BoardHex } from "game/types";
import { useBgioG, useBgioMoves } from "bgio-contexts";
import { useMapContext } from "ui/hooks/useMapContext";

type MapHexesProps = {
  hexSize: number;
};

export const MapHexes = ({ hexSize }: MapHexesProps) => {
  const { G } = useBgioG();
  const { boardHexes } = G;
  const { moves } = useBgioMoves();
  const { voidHex } = moves;
  const {
    selectedMapHex,
    showStartzones,
    isEraser,
    showTerrain,
  } = useMapContext();

  const onClickBoardHex = (event: SyntheticEvent, hex: BoardHex) => {
    if (isEraser) {
      voidHex(hex.id);
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
        <Hexagon
          key={i}
          hex={hex}
          onClick={(e) => onClickBoardHex(e, hex)}
          className={calcClassNames(hex)}
        >
          <g>
            {true && <HexIDText hexSize={hexSize} text={hex.id} />}
            {false && <HexIDText hexSize={hexSize} text={altitude} />}
          </g>
        </Hexagon>
      );
    });
  };
  return <>{hexJSX()}</>;
};

const HexIDText = ({ hexSize, text }) => {
  return (
    <Text className="maphex_text" y={hexSize * 0.6}>
      {text.toString()}
    </Text>
  );
};
