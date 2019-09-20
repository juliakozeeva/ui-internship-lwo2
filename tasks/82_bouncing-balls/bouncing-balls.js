/**
 * @example
 * // return 3
 * bouncingBall(3.0, 0.66, 1.5)
 * function bouncingBall counts the number of jumps in front of the window
 * @param {Number} h, height of this floor
 * @param {Number} bounce, bouncing height from the ground
 * @param {Number} window, window height from the ground
 * @return {Number} how many times ball either falling or bouncing
 * in front of the window
 */
function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h ) {
    let seen = -1;
    while (h > window) {
      seen += 2;
      h = h * bounce;
    }
    return seen;
  } else {
    return -1;
  }
}

export {bouncingBall};
