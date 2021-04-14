import { generateHexagon } from "./hexGen";
import { BoardHexes, GType, StartZones } from "./types";

//!! HEXAGON MAP SCENARIO
export const hexagonMapScenario = makeHexagonMapScenario();
type MapOptions = {
  mapSize?: number;
  flat?: boolean;
};
export function makeHexagonMapScenario(mapOptions?: MapOptions): GType {
  const mapSize = mapOptions?.mapSize ?? 1;
  const flat = mapOptions?.flat ?? false;
  const flatDimensions = {
    hexOrientation: "flat",
    hexHeight: Math.round(Math.sqrt(3) * 100) / 100,
    hexWidth: 2,
  };
  const pointyDimensions = {
    hexOrientation: "pointy",
    hexHeight: 2,
    hexWidth: Math.sqrt(3),
  };
  const mapDimensions = flat ? flatDimensions : pointyDimensions;
  const hexMap = {
    ...mapDimensions,
    mapShape: "hexagon",
    mapSize,
  };
  const startZones: StartZones = {};
  const boardHexes: BoardHexes = generateHexagon(mapSize);
  return {
    boardHexes,
    startZones,
    hexMap,
  };
}
