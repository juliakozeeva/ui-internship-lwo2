class Human {
  constructor(name) {
    this.name = name;
  }
}
class Man extends Human {
  constructor(name) {
    super(name);
    this.sex = 'male';
  }
}
class Woman extends Human {
  constructor(name) {
    super(name);
    this.sex = 'female';
  }
}

class God {
  static create() {
    return [new Man('Adam'), new Woman('Eve')];
  }
}

export {God, Human, Man, Woman};
