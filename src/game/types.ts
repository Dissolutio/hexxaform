export type GType = {
  hexMap: HexMap;
  boardHexes: BoardHexes;
};

export type HexMap = {
  mapShape: string;
  mapId: string;
  mapSize: number;
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
export enum HexTerrain {
  void = "void",
  water = "water",
  grass = "grass",
  sand = "sand",
  rock = "rock",
}

export enum MapShapes {
  hexagon = "hexagon",
  orientedRectangle = "orientedRectangle", // rectangle tilted 45 degrees
  rectangle = "rectangle",
}
