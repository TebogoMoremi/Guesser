function exhaustLives(game) {
  while (game.lives > 0) {
    game.guess(0); // always wrong guess
  }
}

module.exports = {
  exhaustLives,
};
