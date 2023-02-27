// eslint-disable-next-line import/no-unresolved
export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;

    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('Некорректная длина имени');
    }

    const typeArray = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!this.type.includes(...typeArray)) {
      throw new Error('Некорректный тип персонажа');
    }
  }
}
