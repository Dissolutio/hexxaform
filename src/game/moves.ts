import { BoardProps } from "boardgame.io/react";
import { HexUtils } from "react17-hexgrid";

import { GType, BoardHexes, BoardHex } from "./types";

export const moves = {
  deleteHex,
};
function deleteHex(G: GType, ctx: BoardProps["ctx"], hexID: string) {
  G.boardHexes[hexID] = null;
}
