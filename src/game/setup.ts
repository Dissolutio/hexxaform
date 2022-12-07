import {
  generateHexagon,
  generateOrientedRectangle,
  generateRectangle,
} from "./hexGen";
import { nanoid } from "nanoid";
import { BoardHexes, GType, MapShapes } from "./types";

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
type RectangleScenarioOptions = {
  mapWidth?: number;
  mapLength?: number;
  flat?: boolean;
};
type HexagonScenarioOptions = {
  mapSize?: number;
  flat?: boolean;
};
export function makeHexagonMapScenario(
  options?: HexagonScenarioOptions
): GType {
  const mapSize = options?.mapSize ?? 1;
  const flat = options?.flat ?? false;
  const mapWidth = 1 + mapSize * 2;
  const mapLength = mapWidth;
  const hexDimensions = flat ? flatDimensions : pointyDimensions;
  const hexSize =
    mapSize <= 3 ? 15 : mapSize <= 5 ? 20 : mapSize <= 10 ? 25 : 25;
  const hexMap = {
    ...hexDimensions,
    mapId: nanoid(),
    hexSize,
    mapShape: MapShapes.hexagon,
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
  mapWidth: 20,
});
export function makeOrientedRectangleScenario(
  options?: RectangleScenarioOptions
): GType {
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
    mapShape: MapShapes.orientedRectangle,
    mapId: nanoid(),
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

export const rectangleScenario = makeRectangleScenario({
  mapLength: 25,
  mapWidth: 20,
});
export function makeRectangleScenario(
  options?: RectangleScenarioOptions
): GType {
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
    mapId: nanoid(),
    mapShape: MapShapes.rectangle,
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
