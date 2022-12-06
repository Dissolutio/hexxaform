import { Hex } from "react-hexgrid";

export function generateHexID(hex: Hex) {
  return `${hex.q},${hex.r},${hex.s}`;
}
