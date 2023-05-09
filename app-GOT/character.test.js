import { Character } from "./character.js";

describe("Given Character class", () => {
  describe("When we instantiate it", () => {
    test("Should", () => {
      const character = new Character("Joffrey", "Baratheon", 35, "alive");

      expect(character).toHaveProperty("name", "Joffrey");
      expect(character).toHaveProperty("family", "Baratheon");
      expect(character).toHaveProperty("age", 35);
      expect(character).toHaveProperty("status", "alive");
    });
  });
});
