import { BoardProps } from "boardgame.io/react";
import { BoardHexes, GType, HexMap } from "./types";

export const moves = {
  voidHex,
  unVoidHex,
  incAltitudeOfHex,
  decAltitudeOfHex,
};
function voidHex(G: GType, ctx: BoardProps["ctx"], hexID: string) {
  G.boardHexes[hexID].terrain = "void-0";
  G.boardHexes[hexID].startzonePlayerIDs = [];
  G.boardHexes[hexID].altitude = 0;
}
function unVoidHex(G: GType, ctx: BoardProps["ctx"], hexID: string) {
  G.boardHexes[hexID].terrain = "grass-0";
  G.boardHexes[hexID].altitude = 1;
}
function incAltitudeOfHex(G: GType, ctx: BoardProps["ctx"], hexID: string) {
  G.boardHexes[hexID].altitude += 1;
}
function decAltitudeOfHex(G: GType, ctx: BoardProps["ctx"], hexID: string) {
  G.boardHexes[hexID].altitude -= 1;
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
