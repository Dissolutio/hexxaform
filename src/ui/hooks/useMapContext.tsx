import * as React from "react";
type MapContextProviderProps = {
  children: React.ReactNode;
};
const MapContext = React.createContext<
  | {
      selectedMapHex: string;
      selectMapHex: (string) => void;
      showStartzones: boolean;
      toggleShowStartzones: () => void;
      toggleShowTerrain: () => void;
      showTerrain: boolean;
      isEraser: boolean;
      toggleEraserMode: () => void;
      isAddAltitudePen: boolean;
      toggleAddAltitudePen: () => void;
    }
  | undefined
>(undefined);

export function MapContextProvider({ children }: MapContextProviderProps) {
  const [selectedMapHex, setSelectedMapHex] = React.useState("");
  const [showStartzones, setShowStartzones] = React.useState(false);
  const [showTerrain, setShowTerrain] = React.useState(true);
  const [isEraser, setIsEraser] = React.useState(false);
  const [isAddAltitudePen, setIsAddAltitudePen] = React.useState(true);
  const toggleShowStartzones = () => {
    setShowStartzones((s) => !s);
  };
  const toggleShowTerrain = () => {
    setShowTerrain((s) => !s);
  };
  const toggleEraserMode = () => {
    setIsEraser((s) => !s);
  };
  const toggleAddAltitudePen = () => {
    setIsAddAltitudePen((s) => !s);
  };
  const selectMapHex = (hexID: string) => {
    setSelectedMapHex(hexID);
  };
  return (
    <MapContext.Provider
      value={{
        selectedMapHex,
        selectMapHex,
        showStartzones,
        toggleShowStartzones,
        showTerrain,
        toggleShowTerrain,
        isEraser,
        toggleEraserMode,
        isAddAltitudePen,
        toggleAddAltitudePen,
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
