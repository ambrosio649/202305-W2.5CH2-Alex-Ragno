import { Character } from "./character.js";

export class King extends Character {
  regnalYears;
  constructor(name, family, age, status, regnalYears) {
    super(name, family, age, status);
    this.regnalYears = regnalYears;
    this.speech = "Vais a morir todos";
  }
}
