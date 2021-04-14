export type GType = {
  hexMap: HexMap;
  boardHexes: BoardHexes;
  startZones?: StartZones;
};
export type GameMap = {
  boardHexes: BoardHexes;
  startZones: StartZones;
  hexMap: HexMap;
};
export type HexMap = {
  mapShape: string;
  mapSize: number;
  hexOrientation: string;
  hexHeight: number;
  hexWidth: number;
};
export type BoardHex = {
  id: string;
  q: number;
  r: number;
  s: number;
  altitude: number;
  startzonePlayerIDs: string[];
  terrain: "void-0" | "grass-0";
};
export type BoardHexes = {
  [hexID: string]: BoardHex;
};
export type StartZones = {
  [playerID: string]: string[];
};
