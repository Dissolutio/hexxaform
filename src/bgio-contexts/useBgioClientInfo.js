import React from "react";

const BgioClientInfoContext = React.createContext(undefined);

export function BgioClientInfoProvider(props) {
  const {
    children,
    playerID,
    log,
    matchID,
    matchData,
    isActive,
    isMultiplayer,
    isConnected,
    credentials,
  } = props;
  const belongsToPlayer = (thing) => thing?.playerID === playerID;
  return (
    <BgioClientInfoContext.Provider
      value={{
        playerID: playerID || "observer",
        belongsToPlayer,
        log,
        matchID,
        matchData,
        isActive,
        isMultiplayer,
        isConnected,
        credentials,
      }}
    >
      {children}
    </BgioClientInfoContext.Provider>
  );
}
export function useBgioClientInfo() {
  const context = React.useContext(BgioClientInfoContext);
  if (context === undefined) {
    throw new Error(
      "useBgioClientInfo must be used within a BgioClientInfoProvider"
    );
  }
  return context;
}
