function SimTime() {
  this.realTime = 0;
  this.simTime = 0;
  this.speed = 1;
}
SimTime.prototype.setSpeed = function(newSpeed) {
  this.speed = newSpeed;
};

SimTime.prototype.update = function(newRealtime) {
  this.simTime += (newRealtime - this.realTime) * this.speed;
  this.realTime = newRealtime;
};

SimTime.prototype.get = function() {
  return this.simTime;
};

export {SimTime};

