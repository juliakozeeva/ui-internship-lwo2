function SimTime() {
  let realTime = 0;
  let simTime = 0;
  let speed = 1;

  this.setSpeed = function(newSpeed) {
    speed = newSpeed;
  };

  this.update = function(newRealtime) {
    simTime += (newRealtime - realTime) * speed;
    realTime = newRealtime;
  };

  this.get = function() {
    return simTime;
  };
}

export {SimTime};

