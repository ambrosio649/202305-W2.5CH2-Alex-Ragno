import { Adviser } from "./adviser.js";

describe("Given Character class", () => {
  describe("When we instantiate it", () => {
    test("Should", () => {
      const adviser = new Adviser("Joffrey", "Baratheon", 35, "alive", "king");

      expect(adviser).toHaveProperty("name", "Joffrey");
      expect(adviser).toHaveProperty("family", "Baratheon");
      expect(adviser).toHaveProperty("age", 35);
      expect(adviser).toHaveProperty("status", "alive");
      expect(adviser).toHaveProperty("characterToAdvise", "king");
    });
  });
});
