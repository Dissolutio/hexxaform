import { BoardProps } from "boardgame.io/react";
import { GType } from "./types";

export const moves = {
  voidHex,
  incAltitudeOfHex,
};
function voidHex(G: GType, ctx: BoardProps["ctx"], hexID: string) {
  G.boardHexes[hexID].terrain = "void-0";
  G.boardHexes[hexID].startzonePlayerIDs = [];
}
function incAltitudeOfHex(G: GType, ctx: BoardProps["ctx"], hexID: string) {
  G.boardHexes[hexID].altitude += 1;
}
