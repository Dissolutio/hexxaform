import { Client } from "boardgame.io/react";
import { Local } from "boardgame.io/multiplayer";
import { Debug } from "boardgame.io/debug";
import { Board } from "./Board";
import { Hexxaform } from "./game/game";

// Enable Redux DevTools in development
const reduxDevTools =
  window &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const GameClient = Client({
  game: Hexxaform,
  board: Board,
  numPlayers: 1,
  multiplayer: Local(),
  // debug: { impl: Debug },
  debug: false,
  enhancer: reduxDevTools,
});

export const App = () => {
  return <GameClient matchID="matchID" playerID="0" />;
};
