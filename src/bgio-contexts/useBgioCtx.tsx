import * as React from "react";
import { BoardProps } from "boardgame.io/react";

import { useBgioClientInfo } from "./useBgioClientInfo";

type BgioCtxProviderProps = {
  children: React.ReactNode;
  ctx: BoardProps["ctx"];
};

// add two handy properties
type BgioCtxValue = {
  ctx: BoardProps["ctx"] & {};
};
const BgioCtxContext = React.createContext<BgioCtxValue | undefined>(undefined);

export function BgioCtxProvider({ ctx, children }: BgioCtxProviderProps) {
  const { playerID } = useBgioClientInfo();
  return (
    <BgioCtxContext.Provider
      value={{
        ctx: {
          ...ctx,
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
