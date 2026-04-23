const Guesser = require("./guesser");

describe("Guesser Game", () => {
  let game;

  beforeEach(() => {
    game = new Guesser(7, 2);
  });

  test("correct guess returns true", () => {
    expect(game.guess(7)).toBe(true);
  });

  test("wrong guess returns false", () => {
    expect(game.guess(3)).toBe(false);
  });

  test("wrong guess reduces lives", () => {
    game.guess(3);
    expect(game.lives).toBe(1);
  });

  test("correct guess does not reduce lives", () => {
    game.guess(7);
    expect(game.lives).toBe(2);
  });

  test("throws error when no lives left", () => {
    game.guess(1); // lives = 1
    game.guess(2); // lives = 0

    expect(() => game.guess(3)).toThrow("No lives left!");
  });
});