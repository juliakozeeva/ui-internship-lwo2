let peopleInBus = function(busStops) {
  let total = 0;
  for (let i = 0; i < busStops.length; i++) {
    total += busStops[i][0] - busStops[i][1];
  }
  return total;
};

export {peopleInBus};
