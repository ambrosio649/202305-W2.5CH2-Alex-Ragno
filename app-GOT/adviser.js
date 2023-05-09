import { Character } from "./character.js";

export class Adviser extends Character {
  characterToAdvise;
  constructor(name, family, age, status, characterToAdvise) {
    super(name, family, age, status);
    this.characterToAdvise = characterToAdvise;
    this.speech = "No sé por qué, pero creo que voy a morir pronto";
  }
}
