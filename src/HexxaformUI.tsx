import React from "react";
import { ThemeProvider } from "styled-components";

import { useBgioClientInfo, useBgioG, useBgioMoves } from "bgio-contexts";
import { theme } from "./ui/layout/theme";
import { MapContextProvider } from "ui/hooks/useMapContext";
import { Layout } from "ui/layout/Layout";
import { MapDisplay } from "ui/hexmap";
import { Controls, StyledSection } from "ui/controls";
import { useLocalMapMemory } from "ui/hooks/useLocalMapMemory";

export const HexxaformUI = () => {
  const { playerID } = useBgioClientInfo();
  return (
    <ThemeProvider theme={theme(playerID)}>
      <MapContextProvider>
        <Layout>
          <MapDisplay />
          <Controls />
          <LoadSaveMapControls />
        </Layout>
      </MapContextProvider>
    </ThemeProvider>
  );
};

const LoadSaveMapControls = () => {
  const { G } = useBgioG();
  const { boardHexes, hexMap } = G;
  const currentSaveableMap = { boardHexes, hexMap };
  const { map1, setMap1, map2, setMap2, map3, setMap3 } = useLocalMapMemory();
  const { moves } = useBgioMoves();
  const handleLoadMap1 = () => moves.loadMap(map1.boardHexes, map1.hexMap);
  const handleLoadMap2 = () => moves.loadMap(map2.boardHexes, map2.hexMap);
  const handleLoadMap3 = () => moves.loadMap(map3.boardHexes, map3.hexMap);
  const handleSaveMap1 = () => setMap1(currentSaveableMap);
  const handleSaveMap2 = () => setMap2(currentSaveableMap);
  const handleSaveMap3 = () => setMap3(currentSaveableMap);
  return (
    <StyledSection>
      <button onClick={handleLoadMap1}>Load Map 1</button>
      <button onClick={handleSaveMap1}>Save Map 1</button>
      <button onClick={handleLoadMap2}>Load Map 2</button>
      <button onClick={handleSaveMap2}>Save Map 2</button>
      <button onClick={handleLoadMap3}>Load Map 3</button>
      <button onClick={handleSaveMap3}>Save Map 3</button>
    </StyledSection>
  );
};
