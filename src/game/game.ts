import { moves } from "./moves";
import { hexagonMapScenario, orientedRectangleScenario } from "./setup";

export const Hexxaform = {
  name: "Hexxaform",
  setup: (_ctx) => {
    // Setup returns G - the initial bgio game state
    // return hexagonMapScenario;
    return orientedRectangleScenario;
  },
  moves,
  events: {
    endGame: false,
  },
};
