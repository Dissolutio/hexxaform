import { GridGenerator, Hex } from "react17-hexgrid";
import { BoardHexes } from "./types";
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
      // just assign every board hex startzone to include the next player id, from 0 to 5 over and over
      startzonePlayerIDs: [`${i % 6}`],
      // assign all to grass
      terrain: "grass-0",
      // assign all to altitude 1
      altitude: 1,
    };
    return {
      ...prev,
      [boardHex.id]: boardHex,
    };
  }, {});
}

//TODO -- generate other maps -- WIP
// function generateOrientedRectangle(mapSize: number): BoardHexes {
//   const hexgridHexes = GridGenerator.orientedRectangle(mapSize, mapSize)
//   const boardHexes = hexesToBoardHexes(hexgridHexes)
//   return boardHexes
// }
// function generateRectangle(mapSize: number): BoardHexes {
//   const hexgridHexes = GridGenerator.rectangle(mapSize + 1, mapSize + 1)
//   const boardHexes = hexesToBoardHexes(hexgridHexes)
//   return boardHexes
// }
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
