const setup = (ctx, setupData) => {
  return { score: { 0: 0 } };
};

export const hexxaformGame = {
  name: "Hexxaform",
  setup,
  moves: {
    increaseScore,
  },
};

function increaseScore(G, ctx) {
  G.score[`${ctx.currentPlayer}`]++;
}
