import { Client } from "boardgame.io/react";
import { Local } from "boardgame.io/multiplayer";
import { Debug } from "boardgame.io/debug";
import { hexxaformGame } from "./game/game";
import { Board } from "./Board";
import { theme } from "./ui/styled/theme";
import { ThemeProvider } from "styled-components";

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
  return (
    <ThemeProvider theme={theme}>
      <GameClient playerID="0" />
    </ThemeProvider>
  );
}

export default App;
