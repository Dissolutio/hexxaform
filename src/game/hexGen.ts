import { GridGenerator, Hex } from "react-hexgrid";
import { BoardHexes, HexTerrain } from "./types";
import { generateHexID } from "./constants";

// REACT-HEXGRID GENERATORS
export const generateHexagon = (mapSize: number): BoardHexes => {
  const hexgridHexes = GridGenerator.hexagon(mapSize);
  const boardHexes = hexesToBoardHexes(hexgridHexes);
  return boardHexes;
};

function hexesToBoardHexes(hexgridHexes: Hex[]): BoardHexes {
  return hexgridHexes.reduce((prev, curr, i): BoardHexes => {
    const boardHex = {
      ...curr,
      id: generateHexID(curr),
      startzonePlayerIDs: [],
      // assign all to grass
      terrain: HexTerrain.grass,
      // assign all to altitude 1
      altitude: 1,
    };
    return {
      ...prev,
      [boardHex.id]: boardHex,
    };
  }, {});
}

export function generateOrientedRectangle(
  mapLength: number,
  mapWidth: number
): BoardHexes {
  const hexgridHexes = GridGenerator.orientedRectangle(mapLength, mapWidth);
  const boardHexes = hexesToBoardHexes(hexgridHexes);
  return boardHexes;
}

export function generateRectangle(
  mapLength: number,
  mapWidth: number
): BoardHexes {
  const hexgridHexes = GridGenerator.rectangle(mapLength, mapWidth);
  const boardHexes = hexesToBoardHexes(hexgridHexes);
  return boardHexes;
}

//TODO -- generate other maps -- WIP
// function generateParallelogram(mapSize: number): BoardHexes {
//   const hexgridHexes = GridGenerator.parallelogram(
//     -mapSize - 2,
//     mapSize + 2,
//     -mapSize,
//     mapSize
//   )
//   const boardHexes = hexesToBoardHexes(hexgridHexes)
//   return boardHexes
// }
