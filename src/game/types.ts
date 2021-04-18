export type GType = {
  hexMap: HexMap;
  boardHexes: BoardHexes;
};

export type HexMap = {
  mapShape: string;
  mapSize: number;
  mapLength: number;
  mapWidth: number;
  flat: boolean;
  hexHeight: number;
  hexWidth: number;
  hexSize: number;
};

export type BoardHexes = {
  [hexID: string]: BoardHex;
};
export type BoardHex = {
  id: string;
  q: number;
  r: number;
  s: number;
  altitude: number;
  startzonePlayerIDs: string[];
  terrain: HexTerrain;
};
// TODO Figure out how you're going to vary terrain, but this -num seems sloppy
export enum HexTerrain {
  void = "void-0",
  water = "water-0",
  grass = "grass-0",
  sand = "sand-0",
  rock = "rock-0",
}
