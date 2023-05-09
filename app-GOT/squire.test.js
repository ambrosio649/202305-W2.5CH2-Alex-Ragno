import { Squire } from "./squire.js";

describe("Given King class", () => {
  describe("When we instantiate it", () => {
    test("Should", () => {
      const squire = new Squire(
        "Joffrey",
        "Baratheon",
        35,
        "alive",
        "warrior",
        7
      );

      expect(squire).toHaveProperty("name", "Joffrey");
      expect(squire).toHaveProperty("family", "Baratheon");
      expect(squire).toHaveProperty("age", 35);
      expect(squire).toHaveProperty("status", "alive");
      expect(squire).toHaveProperty("characterItServes", "warrior");
      expect(squire).toHaveProperty("assSucker", 7);
    });
  });
});
