import * as React from "react";

export enum PenMode {
  none = "none",
  eraser = "void",
  water = "water",
  grass = "grass",
  sand = "sand",
  rock = "rock",
  incAltitude = "incAltitude",
  decAltitude = "decAltitude",
}

type MapContextProviderProps = {
  children: React.ReactNode;
};

const MapContext = React.createContext<
  | {
      selectedMapHex: string;
      selectMapHex: (string) => void;
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
      toggleIncAltitudePen: () => void;
      toggleDecAltitudePen: () => void;
      toggleWaterPen: () => void;
      toggleGrassPen: () => void;
      toggleSandPen: () => void;
      toggleRockPen: () => void;
    }
  | undefined
>(undefined);
export function MapContextProvider({ children }: MapContextProviderProps) {
  const [altitudeViewer, setAltitudeViewer] = React.useState(0);
  const [penMode, setPenMode] = React.useState(PenMode.grass);
  const [selectedMapHex, setSelectedMapHex] = React.useState("");
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
  const selectMapHex = (hexID: string) => {
    setSelectedMapHex(hexID);
  };
  return (
    <MapContext.Provider
      value={{
        selectedMapHex,
        selectMapHex,
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
        toggleIncAltitudePen,
        toggleDecAltitudePen,
        toggleWaterPen,
        toggleGrassPen,
        toggleSandPen,
        toggleRockPen,
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
