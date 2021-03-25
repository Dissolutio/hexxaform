import { Client } from "boardgame.io/react";
import { Local } from "boardgame.io/multiplayer";
import { Debug } from "boardgame.io/debug";
import { hexxaformGame } from "./game/game";
import { Board } from "./Board";

const GameClient = Client({
  game: hexxaformGame,
  board: Board,
  numPlayers: 1,
  multiplayer: Local(),
  enhancer:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  debug: { impl: Debug },
});

function App() {
  // return <h1>Damn Fine App!</h1>;
  return <GameClient playerID="0" />;
}

export default App;
