export type GType = {
  hexMap: HexMap;
  boardHexes: BoardHexes;
  startZones: StartZones;
};
export type GameMap = {
  boardHexes: BoardHexes;
  startZones: StartZones;
  hexMap: HexMap;
};
export type HexMap = {
  mapShape: string;
  mapSize: number;
  hexGridLayout: string;
  hexHeight: number;
  hexWidth: number;
};
export type BoardHex = {
  id: string;
  q: number;
  r: number;
  s: number;
  altitude: number;
};
export type BoardHexes = {
  [key: string]: BoardHex;
};
export type StartZones = {
  [playerID: string]: string[];
};
