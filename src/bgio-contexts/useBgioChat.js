// BgioChatProvider
import React from "react";

const BgioChatContext = React.createContext(undefined);

export function BgioChatProvider({ chatMessages, sendChatMessage, children }) {
  return (
    <BgioChatContext.Provider
      value={{
        chatMessages,
        sendChatMessage,
      }}
    >
      {children}
    </BgioChatContext.Provider>
  );
}

export function useBgioChat() {
  const context = React.useContext(BgioChatContext);
  if (context === undefined) {
    throw new Error("useBgioChat must be used within a BgioChatProvider");
  }
  return context;
}
