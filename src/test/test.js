import Character from '../app/Character';

describe('Check field name in class Character', () => {
  test('Check empty name in class Character', () => {
    expect(() => new Character('', 'Bowman')).toThrow();
  });

  test('Check long name in class Character', () => {
    expect(() => new Character('Super long name', 'Bowman')).toThrow();
  });

  test('Check correct name in class Character', () => {
    const expextedHero = {
      health: 100,
      level: 1,
      name: 'Monster',
      type: 'Bowerman',
      attack: 0,
      defence: 0,
    };
    expect(new Character('Monster', 'Bowerman')).toEqual(expextedHero);
  });
});

describe('Check field type in class Character', () => {
  test('Check wrong value in type', () => {
    expect(() => new Character('Monster', '')).toThrow();
  });
});