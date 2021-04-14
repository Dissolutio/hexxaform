import { ThemeProvider } from "styled-components";
import { BoardProps } from "boardgame.io/react";
import { ChatMessage } from "boardgame.io";
import { theme } from "./ui/layout/theme";
import {
  BgioClientInfoProvider,
  BgioGProvider,
  BgioMovesProvider,
  BgioEventsProvider,
  BgioCtxProvider,
  BgioChatProvider,
} from "./bgio-contexts";
import { Layout } from "./ui/layout/Layout";
import { GType } from "./game/types";
import { MapContextProvider } from "ui/hooks/useMapContext";

type MyBoardProps = BoardProps<GType> & { chatMessages?: ChatMessage[] };

export function Board(props: MyBoardProps) {
  const {
    // G
    G,
    // CTX
    ctx,
    // MOVES
    moves,
    undo,
    redo,
    // EVENTS
    events,
    reset,
    // CHAT
    sendChatMessage,
    chatMessages = [],
    // ALSO ON BOARD PROPS
    playerID,
    log,
    matchID,
    matchData,
    isActive,
    isMultiplayer,
    isConnected,
    credentials,
  } = props;
  return (
    <ThemeProvider theme={theme(playerID)}>
      <BgioClientInfoProvider
        log={log}
        playerID={playerID}
        matchID={matchID}
        matchData={matchData}
        credentials={credentials}
        isMultiplayer={isMultiplayer}
        isConnected={isConnected}
        isActive={isActive}
      >
        <BgioGProvider G={G}>
          <BgioCtxProvider ctx={ctx}>
            <BgioMovesProvider moves={moves} undo={undo} redo={redo}>
              <BgioEventsProvider reset={reset} events={events}>
                <BgioChatProvider
                  chatMessages={chatMessages}
                  sendChatMessage={sendChatMessage}
                >
                  <MapContextProvider>
                    <Layout />
                  </MapContextProvider>
                </BgioChatProvider>
              </BgioEventsProvider>
            </BgioMovesProvider>
          </BgioCtxProvider>
        </BgioGProvider>
      </BgioClientInfoProvider>
    </ThemeProvider>
  );
}
