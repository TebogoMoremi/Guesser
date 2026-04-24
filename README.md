# Guesser
Guessing game with Jest test

# 🎮 Guesser Game (Jest Testing Project)

This is a simple number guessing game built in JavaScript and tested using **Jest**.

It demonstrates:
- Unit testing
- Error handling
- State management (lives system)
- Clean project structure

---

# 📁 Project Structure
# 🧠 How the Game Works

The `Guesser` class lets a player guess a hidden number with limited lives.

### Rules:
- ✅ Correct guess → returns `true`
- ❌ Wrong guess → returns `false` and reduces lives
- 💥 When lives reach `0` → game throws an error

---
PASS  tests/guesser.test.js
✓ returns true for correct guess
✓ wrong guess reduces lives
✓ throws error when no lives left
