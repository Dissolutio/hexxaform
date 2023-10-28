import { BoardProps } from "boardgame.io/react";
import { ChatMessage } from "boardgame.io";

import { GType } from "./game/types";
import { HexxaformUI } from "./HexxaformUI";
import { BgioClientInfoProvider } from "./ui/bgio-contexts/useBgioClientInfo";
import { BgioGProvider } from "./ui/bgio-contexts/useBgioG";
import { BgioCtxProvider } from "./ui/bgio-contexts/useBgioCtx";
import { BgioMovesProvider } from "./ui/bgio-contexts/useBgioMoves";
import { BgioEventsProvider } from "./ui/bgio-contexts/useBgioEvents";
import { BgioChatProvider } from "./ui/bgio-contexts/useBgioChat";

type MyBoardProps = BoardProps<GType> & { chatMessages?: ChatMessage[] };

export function HexxaformBoard(props: MyBoardProps) {
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
    <BgioClientInfoProvider
      log={log}
      playerID={playerID || ""}
      matchID={matchID}
      matchData={matchData}
      credentials={credentials || ""}
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
                <HexxaformUI mapSize={G.hexMap.mapSize} />
              </BgioChatProvider>
            </BgioEventsProvider>
          </BgioMovesProvider>
        </BgioCtxProvider>
      </BgioGProvider>
    </BgioClientInfoProvider>
  );
}
