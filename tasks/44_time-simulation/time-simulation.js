class SimTime {
  constructor() {
    this.realTime = 0;
    this.simTime = 0;
    this.speed = 1;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  update(realTime) {
    this.simTime += (realTime - this.realTime) * this.speed;
    this.realTime = realTime;
  }

  get() {
    return this.simTime;
  }
}

export {SimTime};

