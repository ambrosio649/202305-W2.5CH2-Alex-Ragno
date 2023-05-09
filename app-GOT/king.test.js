import { King } from "./king.js";

describe("Given King class", () => {
  describe("When we instantiate it", () => {
    test("Should", () => {
      const king = new King("Joffrey", "Baratheon", 35, "alive", 7);

      expect(king).toHaveProperty("name", "Joffrey");
      expect(king).toHaveProperty("family", "Baratheon");
      expect(king).toHaveProperty("age", 35);
      expect(king).toHaveProperty("status", "alive");
      expect(king).toHaveProperty("regnalYears", 7);
    });
  });
});
