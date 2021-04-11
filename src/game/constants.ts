import { Hex } from "react17-hexgrid";

export function generateHexID(hex: Hex) {
  return `${hex.q},${hex.r},${hex.s}`;
}
