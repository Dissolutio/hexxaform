import React from "react";
import { useBgioClientInfo } from "./useBgioClientInfo";

const BgioCtxContext = React.createContext(undefined);

export function BgioCtxProvider({ ctx, children }) {
  const { playerID } = useBgioClientInfo();
  const isMyTurn = ctx.currentPlayer === playerID;
  const isGameover = Boolean(ctx.gameover);
  return (
    <BgioCtxContext.Provider
      value={{
        ctx: {
          ...ctx,
          isMyTurn,
          isGameover,
        },
      }}
    >
      {children}
    </BgioCtxContext.Provider>
  );
}

export function useBgioCtx() {
  const context = React.useContext(BgioCtxContext);
  if (context === undefined) {
    throw new Error("useBgioCtx must be used within a BgioCtxProvider");
  }
  return context;
}
