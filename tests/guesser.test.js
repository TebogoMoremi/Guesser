const Guesser = require("../src/guesser");
const { exhaustLives } = require("./helper");

describe("Guesser Game", () => {
  let game;

  // 🔄 Fresh instance before each test
  beforeEach(() => {
    game = new Guesser(7, 2);
  });

  // 🎯 CORRECT GUESS TESTS
  test("returns true for correct guess", () => {
    expect(game.guess(7)).toBe(true);
  });

  test("correct guess does not reduce lives", () => {
    game.guess(7);
    expect(game.lives).toBe(2);
  });

  // ❌ WRONG GUESS TESTS
  test("returns false for wrong guess", () => {
    expect(game.guess(3)).toBe(false);
  });

  test("wrong guess reduces lives by 1", () => {
    game.guess(3);
    expect(game.lives).toBe(1);
  });

  test.each([1, 2, 10])(
    "wrong guess %i returns false",
    (input) => {
      expect(game.guess(input)).toBe(false);
    }
  );

  // 🔁 MIXED BEHAVIOUR
  test("correct guess after wrong guess still works", () => {
    game.guess(3);
    expect(game.guess(7)).toBe(true);
  });

  // 💥 ERROR HANDLING
  test("throws error when no lives left", () => {
    exhaustLives(game);
    expect(() => game.guess(5)).toThrow("No lives left!");
  });

  test("cannot guess after lives reach zero", () => {
    exhaustLives(game);
    expect(() => game.guess(7)).toThrow();
  });

  test("starting with zero lives throws immediately", () => {
    const deadGame = new Guesser(7, 0);
    expect(() => deadGame.guess(7)).toThrow("No lives left!");
  });

  // 🧱 EDGE CASES
  test("string input is treated as wrong guess", () => {
    expect(game.guess("7")).toBe(false);
  });

  test("null input is treated as wrong guess", () => {
    expect(game.guess(null)).toBe(false);
  });

  test("undefined input is treated as wrong guess", () => {
    expect(game.guess(undefined)).toBe(false);
  });

  // 🔢 STATE SAFETY
  test("lives never go below zero", () => {
    exhaustLives(game);

    try {
      game.guess(3);
    } catch {}

    expect(game.lives).toBe(0);
  });
});