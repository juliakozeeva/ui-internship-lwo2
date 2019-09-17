function SimTime() {
  let realTime = 0;
  let simTime = 0;
  let speed = 1;

  SimTime.prototype.setSpeed = function(newSpeed) {
    speed = newSpeed;
  };

  SimTime.prototype.update = function(newRealtime) {
    simTime += (newRealtime - realTime) * speed;
    realTime = newRealtime;
  };

  SimTime.prototype.get = function() {
    return simTime;
  };
}

export {SimTime};

