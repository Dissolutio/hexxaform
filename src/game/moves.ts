import { BoardProps } from "boardgame.io/react";
import { BoardHexes, GType, HexMap, HexTerrain } from "./types";

export const moves = {
  voidHex,
  unVoidHex,
  incAltitudeOfHex,
  decAltitudeOfHex,
  paintWaterHex,
  paintGrassHex,
  paintSandHex,
  paintRockHex,
  loadMap,
};

function voidHex(G: GType, ctx: BoardProps["ctx"], hexID: string) {
  G.boardHexes[hexID].terrain = HexTerrain.void;
  G.boardHexes[hexID].startzonePlayerIDs = [];
  G.boardHexes[hexID].altitude = 0;
}
function unVoidHex(G: GType, ctx: BoardProps["ctx"], hexID: string) {
  G.boardHexes[hexID].terrain = HexTerrain.grass;
  G.boardHexes[hexID].altitude = 1;
}
function incAltitudeOfHex(G: GType, ctx: BoardProps["ctx"], hexID: string) {
  G.boardHexes[hexID].altitude += 1;
}
function decAltitudeOfHex(G: GType, ctx: BoardProps["ctx"], hexID: string) {
  G.boardHexes[hexID].altitude -= 1;
}
function paintWaterHex(G: GType, ctx: BoardProps["ctx"], hexID: string) {
  G.boardHexes[hexID].terrain = HexTerrain.water;
}
function paintGrassHex(G: GType, ctx: BoardProps["ctx"], hexID: string) {
  G.boardHexes[hexID].terrain = HexTerrain.grass;
}
function paintSandHex(G: GType, ctx: BoardProps["ctx"], hexID: string) {
  G.boardHexes[hexID].terrain = HexTerrain.sand;
}
function paintRockHex(G: GType, ctx: BoardProps["ctx"], hexID: string) {
  G.boardHexes[hexID].terrain = HexTerrain.rock;
}
function loadMap(
  G: GType,
  ctx: BoardProps["ctx"],
  boardHexes: BoardHexes,
  hexMap: HexMap
) {
  G.boardHexes = boardHexes;
  G.hexMap = hexMap;
}
