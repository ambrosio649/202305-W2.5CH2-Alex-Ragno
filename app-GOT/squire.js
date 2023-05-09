import { Character } from "./character.js";

export class Squire extends Character {
  characterItServes;
  assSucker;
  constructor(name, family, age, status, characterItServes, assSucker) {
    super(name, family, age, status);
    this.characterItServes = characterItServes;
    this.assSucker = assSucker;
    this.speech = "Soy un loser";
  }
}
