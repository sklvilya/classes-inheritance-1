// eslint-disable-next-line import/no-unresolved
import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}