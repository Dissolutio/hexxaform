import { ThemeProvider } from "styled-components";
import React from "react";
import { useBgioClientInfo } from "./ui/bgio-contexts/useBgioClientInfo";
import { Controls } from "./ui/controls/Controls";
import { MapDisplay } from "./ui/hexmap/MapDisplay";
import { MapContextProvider } from "./ui/hooks/useMapContext";
import { Layout } from "./ui/layout/Layout";
import { theme } from "./ui/layout/theme";

export const HexxaformUI = ({ mapSize }: { mapSize: number }) => {
  const { playerID } = useBgioClientInfo();
  const printRef = React.useRef<HTMLDivElement>(null);
  return (
    <ThemeProvider theme={theme(playerID)}>
      <MapContextProvider mapSize={mapSize}>
        <Layout printRef={printRef}>
          <MapDisplay printRef={printRef} />
          <Controls />
        </Layout>
      </MapContextProvider>
    </ThemeProvider>
  );
};
