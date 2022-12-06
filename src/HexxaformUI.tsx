import { ThemeProvider } from "styled-components";
import React from "react";
import { useBgioClientInfo } from "./ui/bgio-contexts";
import { Controls } from "./ui/controls";
import { MapDisplay } from "./ui/hexmap";
import { MapContextProvider } from "./ui/hooks/useMapContext";
import { Layout } from "./ui/layout/Layout";
import { theme } from "./ui/layout/theme";

export const HexxaformUI = () => {
  const { playerID } = useBgioClientInfo();
  const printRef = React.useRef<HTMLDivElement>(null);
  return (
    <ThemeProvider theme={theme(playerID)}>
      <MapContextProvider>
        <Layout printRef={printRef}>
          <MapDisplay printRef={printRef} />
          <Controls />
        </Layout>
      </MapContextProvider>
    </ThemeProvider>
  );
};
