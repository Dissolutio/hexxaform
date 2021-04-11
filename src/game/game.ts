import { TurnOrder, PlayerView } from "boardgame.io/core";
import { BoardProps } from "boardgame.io/react";

import { moves } from "./moves";
import { hexagonMapScenario } from "./setup";

export const Hexxaform = {
  name: "Hexxaform",
  setup: (_ctx) => {
    // Setup returns G - the initial bgio game state
    return hexagonMapScenario;
  },
  moves,
  events: {
    endGame: false,
  },
};
