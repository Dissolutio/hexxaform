import React from "react";

const BgioGContext = React.createContext(undefined);

export function BgioGProvider({ G, children }) {
  return (
    <BgioGContext.Provider value={{ G }}>{children}</BgioGContext.Provider>
  );
}
export function useBgioG() {
  const context = React.useContext(BgioGContext);
  if (context === undefined) {
    throw new Error("useBgioG must be used within a BgioGProvider");
  }
  return context;
}
