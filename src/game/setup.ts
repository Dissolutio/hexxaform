import {
  generateHexagon,
  generateOrientedRectangle,
  generateRectangle,
} from "./hexGen";
import { BoardHexes, GType } from "./types";

// All Maps follow these hex dimensions:
const flatDimensions = {
  flat: true,
  hexHeight: Math.round(Math.sqrt(3) * 100) / 100,
  hexWidth: 2,
};
const pointyDimensions = {
  flat: false,
  hexHeight: 2,
  hexWidth: Math.round(Math.sqrt(3) * 100) / 100,
};

//!! HEXAGON MAP SCENARIO
export const hexagonMapScenario = makeHexagonMapScenario({ mapSize: 10 });
type MapOptions = {
  mapSize?: number;
  mapWidth?: number;
  mapLength?: number;
  flat?: boolean;
};
export function makeHexagonMapScenario(mapOptions?: MapOptions): GType {
  const mapSize = mapOptions?.mapSize ?? 1;
  const flat = mapOptions?.flat ?? false;
  const mapWidth = 1 + mapSize * 2;
  const mapLength = mapWidth;
  const hexDimensions = flat ? flatDimensions : pointyDimensions;
  const hexSize =
    mapSize <= 3 ? 15 : mapSize <= 5 ? 20 : mapSize <= 10 ? 25 : 25;
  const hexMap = {
    ...hexDimensions,
    hexSize,
    mapShape: "hexagon",
    mapSize,
    mapLength,
    mapWidth,
  };
  const boardHexes: BoardHexes = generateHexagon(mapSize);

  return {
    boardHexes,
    hexMap,
  };
}
export const orientedRectangleScenario = makeOrientedRectangleScenario({
  mapLength: 20,
  mapWidth: 15,
});
export function makeOrientedRectangleScenario(mapOptions?: MapOptions): GType {
  const mapLength = mapOptions?.mapLength ?? 1;
  const mapWidth = mapOptions?.mapWidth ?? 1;
  const mapSize = Math.max(mapLength, mapWidth);
  const flat = mapOptions?.flat ?? false;
  const hexDimensions = flat ? flatDimensions : pointyDimensions;
  const hexSize =
    mapSize <= 3 ? 15 : mapSize <= 5 ? 20 : mapSize <= 10 ? 25 : 30;
  const hexMap = {
    ...hexDimensions,
    hexSize,
    mapShape: "orientedRectangle",
    mapSize: Math.max(mapLength, mapWidth),
    mapLength,
    mapWidth,
  };
  // const boardHexes: BoardHexes = generateOrientedRectangle(mapLength, mapWidth);
  const boardHexes: BoardHexes = generateRectangle(mapLength, mapWidth);
  return {
    boardHexes,
    hexMap,
  };
}
