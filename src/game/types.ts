export type GType = {
  hexMap: HexMap;
  boardHexes: BoardHexes;
};

export type HexMap = {
  mapShape: string;
  mapSize: number;
  hexOrientation: string;
  hexHeight: number;
  hexWidth: number;
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
  terrain: "void-0" | "grass-0";
};
