import React from "react";

const BgioEventsContext = React.createContext(undefined);

export function BgioEventsProvider({ events, reset, children }) {
  return (
    <BgioEventsContext.Provider
      value={{
        events,
        reset,
      }}
    >
      {children}
    </BgioEventsContext.Provider>
  );
}

export function useBgioEvents() {
  const context = React.useContext(BgioEventsContext);
  if (context === undefined) {
    throw new Error("useBgioEvents must be used within a BgioEventsProvider");
  }
  return context;
}
