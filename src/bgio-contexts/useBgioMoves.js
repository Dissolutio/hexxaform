import React from "react";

const BgioMovesContext = React.createContext(undefined);
export function BgioMovesProvider({ moves, undo, redo, children }) {
  return (
    <BgioMovesContext.Provider value={{ moves, undo, redo }}>
      {children}
    </BgioMovesContext.Provider>
  );
}
export function useBgioMoves() {
  const context = React.useContext(BgioMovesContext);
  if (context === undefined) {
    throw new Error("useBgioMoves must be used within a BgioMovesProvider");
  }
  return context;
}
