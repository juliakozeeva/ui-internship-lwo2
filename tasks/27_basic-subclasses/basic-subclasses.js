class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}
class Man extends Human {
  constructor(name, sex) {
    super(name, 'male');
  }
}
class Woman extends Human {
  constructor(name, sex) {
    super(name, 'female');
  }
}

class God {
  static create() {
    return [new Man('Adam'), new Woman('Eve')];
  }
}

export {God, Human, Man, Woman};
