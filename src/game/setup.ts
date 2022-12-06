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
export const hexagonMapScenario = makeHexagonMapScenario({ mapSize: 20 });
type RectangleScenarioOptions = {
  mapWidth?: number;
  mapLength?: number;
  flat?: boolean;
};
type HexagonScenarioOptions = {
  mapSize?: number;
  flat?: boolean;
}
export function makeHexagonMapScenario(options?: HexagonScenarioOptions): GType {
  const mapSize = options?.mapSize ?? 1;
  const flat = options?.flat ?? false;
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
  mapLength: 25,
  mapWidth: 15,
});
export function makeOrientedRectangleScenario(options?: RectangleScenarioOptions): GType {
  const mapLength = options?.mapLength ?? 1;
  const mapWidth = options?.mapWidth ?? 1;
  const mapSize = Math.max(mapLength, mapWidth);
  const flat = options?.flat ?? false;
  const hexDimensions = flat ? flatDimensions : pointyDimensions;
  const hexSize =
  mapSize >= 20
      ? 40
      : mapSize <= 3
      ? 15
      : mapSize <= 5
      ? 20
      : mapSize <= 10
      ? 25
      : 30;
      const hexMap = {
    ...hexDimensions,
    hexSize,
    mapShape: "orientedRectangle",
    mapSize: Math.max(mapLength, mapWidth),
    mapLength,
    mapWidth,
  };
  const boardHexes: BoardHexes = generateOrientedRectangle(mapLength, mapWidth);
  return {
    boardHexes,
    hexMap,
  };
}

// presumably this looks a lot like the oriented rectangle
export const rectangleScenario = makeRectangleScenario({
  mapLength: 21,
  mapWidth: 18,
});
export function makeRectangleScenario(options?: RectangleScenarioOptions): GType {
  const mapLength = options?.mapLength ?? 1;
  const mapWidth = options?.mapWidth ?? 1;
  const mapSize = Math.max(mapLength, mapWidth);
  const flat = options?.flat ?? false;
  const hexDimensions = flat ? flatDimensions : pointyDimensions;
  const hexSize =
    mapSize >= 20
      ? 40
      : mapSize <= 3
      ? 15
      : mapSize <= 5
      ? 20
      : mapSize <= 10
      ? 25
      : 30;
  const hexMap = {
    ...hexDimensions,
    hexSize,
    mapShape: "rectangle",
    mapSize: Math.max(mapLength, mapWidth),
    mapLength,
    mapWidth,
  };
  const boardHexes: BoardHexes = generateRectangle(mapLength, mapWidth);
  return {
    boardHexes,
    hexMap,
  };
}
