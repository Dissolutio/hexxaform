import React from "react";
import { ThemeProvider } from "styled-components";

import { useBgioClientInfo } from "bgio-contexts";
import { theme } from "./ui/layout/theme";
import { MapContextProvider } from "ui/hooks/useMapContext";
import { Layout } from "ui/layout/Layout";

export const HexxaformUI = () => {
  const { playerID } = useBgioClientInfo();
  return (
    <ThemeProvider theme={theme(playerID)}>
      <MapContextProvider>
        <Layout />
      </MapContextProvider>
    </ThemeProvider>
  );
};
