import { Client } from "boardgame.io/react";
import { Local } from "boardgame.io/multiplayer";
import { Debug } from "boardgame.io/debug";
import { HexxaformBoard } from "./HexxaformBoard";
import { Hexxaform } from "./game/game";

// Enable Redux DevTools in development
const reduxDevTools =
  window &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const GameClient = Client({
  game: Hexxaform,
  board: HexxaformBoard,
  numPlayers: 1,
  multiplayer: Local(),
  debug: false,
  // debug: { impl: Debug },
  enhancer: reduxDevTools,
});

export const App = () => {
  return <GameClient matchID="matchID" playerID="0" />;
};
