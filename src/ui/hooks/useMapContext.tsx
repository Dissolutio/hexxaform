import * as React from "react";

export enum PenMode {
  none = "none",
  eraser = "void",
  eraserStartZone = "eraserStartZone",
  water = "water",
  grass = "grass",
  sand = "sand",
  rock = "rock",
  road = "road",
  bush = "bush",
  palm = "palm",
  incAltitude = "incAltitude",
  decAltitude = "decAltitude",
  startZone0 = "startZone0",
  startZone1 = "startZone1",
  startZone2 = "startZone2",
  startZone3 = "startZone3",
  startZone4 = "startZone4",
}

type MapContextProviderProps = {
  children: React.ReactNode;
  mapSize: number;
};

const MapContext = React.createContext<
  | {
      selectedMapHex: string;
      selectMapHex: (hexID: string) => void;
      viewBox: string;
      onIncrementX: () => void;
      onDecrementX: () => void;
      onIncrementY: () => void;
      onDecrementY: () => void;
      onIncreaseLength: () => void;
      onDecreaseLength: () => void;
      onIncreaseHeight: () => void;
      onDecreaseHeight: () => void;
      penMode: PenMode;
      toggleSelectHexMode: () => void;
      altitudeViewer: number;
      goUpAltitudeViewer: () => void;
      goDownAltitudeViewer: () => void;
      showStartzones: boolean;
      toggleShowStartzones: () => void;
      toggleShowTerrain: () => void;
      showTerrain: boolean;
      toggleEraserPen: () => void;
      toggleEraserStartZonePen: () => void;
      toggleIncAltitudePen: () => void;
      toggleDecAltitudePen: () => void;
      toggleWaterPen: () => void;
      toggleGrassPen: () => void;
      toggleSandPen: () => void;
      toggleRockPen: () => void;
      toggleRoadPen: () => void;
      toggleJungleBushPen: () => void;
      toggleJungleTreePen: () => void;
      toggleStartZonePen: (playerID: string) => void;
      penThickness: number;
      togglePenThickness: () => void;
    }
  | undefined
>(undefined);
export function MapContextProvider({
  children,
  mapSize,
}: MapContextProviderProps) {
  const [selectedMapHex, setSelectedMapHex] = React.useState("");
  // Map Display
  const [viewBoxLength, setViewBoxLength] = React.useState(mapSize * 100);
  const [viewBoxHeight, setViewBoxHeight] = React.useState(mapSize * 100);
  const [viewBoxX, setViewBoxX] = React.useState(mapSize * -40);
  const [viewBoxY, setViewBoxY] = React.useState(mapSize * -40);
  const viewBox = `${viewBoxX} ${viewBoxY} ${viewBoxLength} ${viewBoxHeight}`;
  const onIncrementX = () => {
    setViewBoxX((s) => s + 100);
  };
  const onDecrementX = () => {
    setViewBoxX((s) => s - 100);
  };
  const onIncrementY = () => {
    setViewBoxY((s) => s + 100);
  };
  const onDecrementY = () => {
    setViewBoxY((s) => s - 100);
  };
  const onIncreaseLength = () => {
    setViewBoxLength((s) => s + 100);
  };
  const onDecreaseLength = () => {
    setViewBoxLength((s) => s - 100);
  };
  const onIncreaseHeight = () => {
    setViewBoxHeight((s) => s + 100);
  };
  const onDecreaseHeight = () => {
    setViewBoxHeight((s) => s - 100);
  };
  // Pen Mode
  const [altitudeViewer, setAltitudeViewer] = React.useState(0);
  const [penMode, setPenMode] = React.useState(PenMode.grass);
  const [penThickness, setPenThickness] = React.useState(1);
  // Lenses
  const [showStartzones, setShowStartzones] = React.useState(false);
  const [showTerrain, setShowTerrain] = React.useState(true);

  const goUpAltitudeViewer = () => {
    setAltitudeViewer((s) => s + 1);
  };
  const goDownAltitudeViewer = () => {
    if (altitudeViewer > 0) {
      setAltitudeViewer((s) => s - 1);
    }
  };

  const togglePenThickness = () => {
    setPenThickness((s) => (s === 0 ? 1 : 0));
  };
  const toggleShowStartzones = () => {
    setShowStartzones((s) => !s);
  };
  const toggleShowTerrain = () => {
    setShowTerrain((s) => !s);
  };
  //! Select Hex Mode
  const toggleSelectHexMode = () => {
    setPenMode(PenMode.none);
  };
  //! Pen modes
  const toggleEraserPen = () => {
    setPenMode(PenMode.eraser);
  };
  const toggleEraserStartZonePen = () => {
    setPenMode(PenMode.eraserStartZone);
  };
  const toggleIncAltitudePen = () => {
    setPenMode(PenMode.incAltitude);
  };
  const toggleDecAltitudePen = () => {
    setPenMode(PenMode.decAltitude);
  };
  const toggleWaterPen = () => {
    setPenMode(PenMode.water);
  };
  const toggleGrassPen = () => {
    setPenMode(PenMode.grass);
  };
  const toggleSandPen = () => {
    setPenMode(PenMode.sand);
  };
  const toggleRockPen = () => {
    setPenMode(PenMode.rock);
  };
  const toggleRoadPen = () => {
    setPenMode(PenMode.road);
  };
  const toggleJungleBushPen = () => {
    setPenMode(PenMode.bush);
  };
  const toggleJungleTreePen = () => {
    setPenMode(PenMode.palm);
  };
  const toggleStartZonePen = (playerID: string) => {
    switch (playerID) {
      case "0":
        setPenMode(PenMode.startZone0);
        break;
      case "1":
        setPenMode(PenMode.startZone1);
        break;
      case "2":
        setPenMode(PenMode.startZone2);
        break;
      case "3":
        setPenMode(PenMode.startZone3);
        break;
      case "4":
        setPenMode(PenMode.startZone4);
        break;
      default:
        break;
    }
  };
  const selectMapHex = (hexID: string) => {
    setSelectedMapHex(hexID);
  };
  return (
    <MapContext.Provider
      value={{
        selectedMapHex,
        selectMapHex,
        viewBox,
        onIncrementX,
        onDecrementX,
        onIncrementY,
        onDecrementY,
        onIncreaseLength,
        onDecreaseLength,
        onIncreaseHeight,
        onDecreaseHeight,
        penMode,
        toggleSelectHexMode,
        altitudeViewer,
        goUpAltitudeViewer,
        goDownAltitudeViewer,
        showStartzones,
        toggleShowStartzones,
        showTerrain,
        toggleShowTerrain,
        toggleEraserPen,
        toggleEraserStartZonePen,
        toggleIncAltitudePen,
        toggleDecAltitudePen,
        toggleWaterPen,
        toggleGrassPen,
        toggleSandPen,
        toggleRockPen,
        toggleRoadPen,
        toggleJungleBushPen,
        toggleJungleTreePen,
        toggleStartZonePen,
        penThickness,
        togglePenThickness,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}
export function useMapContext() {
  const context = React.useContext(MapContext);
  if (context === undefined) {
    throw new Error("useMapContext must be used within a MapContextProvider");
  }
  return context;
}
