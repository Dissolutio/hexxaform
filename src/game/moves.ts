import { BoardProps } from "boardgame.io/react";
import { GType } from "./types";

export const moves = {
  voidHex,
};
function voidHex(G: GType, ctx: BoardProps["ctx"], hexID: string) {
  G.boardHexes[hexID].terrain = "void-0";
  G.boardHexes[hexID].startzonePlayerIDs = [];
}
