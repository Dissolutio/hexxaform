import type { Move } from "boardgame.io";
import { nanoid } from "nanoid";
import { BoardHexes, GType, HexMap, HexTerrain } from "./types";
const voidHex: Move<GType> = ({ G, ctx }, { hexID }: { hexID: string }) => {
  G.boardHexes[hexID].terrain = HexTerrain.void;
  G.boardHexes[hexID].startzonePlayerIDs = [];
  G.boardHexes[hexID].altitude = 0;
};
const unVoidHex: Move<GType> = ({ G, ctx }, { hexID }: { hexID: string }) => {
  G.boardHexes[hexID].terrain = HexTerrain.grass;
  G.boardHexes[hexID].altitude = 1;
};
const paintStartZone: Move<GType> = (
  { G, ctx },
  { hexID, playerID }: { hexID: string; playerID: string }
) => {
  const currentStartZonePlayerIDs = G.boardHexes[hexID].startzonePlayerIDs;
  if (!currentStartZonePlayerIDs.includes(playerID) && Boolean(playerID)) {
    G.boardHexes[hexID].startzonePlayerIDs.push(playerID);
  }
};
const voidStartZone: Move<GType> = ({ G }, { hexID }: { hexID: string }) => {
  G.boardHexes[hexID].startzonePlayerIDs = [];
};
const incAltitudeOfHex: Move<GType> = ({ G }, { hexID }: { hexID: string }) => {
  G.boardHexes[hexID].altitude += 1;
};
const decAltitudeOfHex: Move<GType> = ({ G }, { hexID }: { hexID: string }) => {
  G.boardHexes[hexID].altitude -= 1;
};
const paintWaterHex: Move<GType> = ({ G }, { hexID }: { hexID: string }) => {
  G.boardHexes[hexID].terrain = HexTerrain.water;
};
const paintGrassHex: Move<GType> = (
  { G },
  { hexID, thickness }: { hexID: string; thickness: number }
) => {
  G.boardHexes[hexID].terrain = HexTerrain.grass;
  G.boardHexes[hexID].altitude += thickness;
};
const paintSandHex: Move<GType> = (
  { G },
  { hexID, thickness }: { hexID: string; thickness: number }
) => {
  G.boardHexes[hexID].terrain = HexTerrain.sand;
  G.boardHexes[hexID].altitude += thickness;
};
const paintRockHex: Move<GType> = (
  { G },
  { hexID, thickness }: { hexID: string; thickness: number }
) => {
  G.boardHexes[hexID].terrain = HexTerrain.rock;
  G.boardHexes[hexID].altitude += thickness;
};
const loadMap: Move<GType> = (
  { G },
  {
    boardHexes,
    hexMap,
  }: {
    boardHexes: BoardHexes;
    hexMap: HexMap;
  }
) => {
  if (!hexMap.mapId) {
    hexMap.mapId = nanoid();
  }
  G.boardHexes = boardHexes;
  G.hexMap = hexMap;
};

export const moves = {
  voidHex,
  unVoidHex,
  paintStartZone,
  voidStartZone,
  incAltitudeOfHex,
  decAltitudeOfHex,
  paintWaterHex,
  paintGrassHex,
  paintSandHex,
  paintRockHex,
  loadMap,
};
