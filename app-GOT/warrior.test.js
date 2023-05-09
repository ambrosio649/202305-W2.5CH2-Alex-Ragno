import { Warrior } from "./warrior.js";

describe("Given King class", () => {
  describe("When we instantiate it", () => {
    test("Should", () => {
      const warrior = new Warrior(
        "Joffrey",
        "Baratheon",
        35,
        "alive",
        "sword",
        7
      );

      expect(warrior).toHaveProperty("name", "Joffrey");
      expect(warrior).toHaveProperty("family", "Baratheon");
      expect(warrior).toHaveProperty("age", 35);
      expect(warrior).toHaveProperty("status", "alive");
      expect(warrior).toHaveProperty("weapon", "sword");
      expect(warrior).toHaveProperty("skill", 7);
    });
  });
});
