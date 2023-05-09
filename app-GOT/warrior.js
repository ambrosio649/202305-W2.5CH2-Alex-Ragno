import { Character } from "./character.js";

export class Warrior extends Character {
  weapon;
  skill;
  constructor(name, family, age, status, weapon, skill) {
    super(name, family, age, status);
    this.weapon = weapon;
    this.skill = skill;
    this.speech = "Primero pego y luego pregunto";
  }
}
