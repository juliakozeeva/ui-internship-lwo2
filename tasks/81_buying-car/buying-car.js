/**
 * @example
 * // return [6, 766]
 * nbMonths(2000, 8000, 1000, 1.5)
 * function nbMonths calculates how many months will it take
 * to save up enough money to buy the car, and how much money will left over
 * @param {Number} startPriceOld, price of an old car
 * @param {Number} startPriceNew, price of a new car
 * @param {Number} savingPerMonth, monthly savings
 * @param {Number} percentLossByMonth, the percent of loss increases
 * @return {Array} arrays of two number [month, money]
 */
function nbMonths(
    startPriceOld,
    startPriceNew,
    savingPerMonth,
    percentLossByMonth
) {
  const result = [];
  let money = 0;
  let month = 1;
  let diffPrice = startPriceNew - startPriceOld;
  if (diffPrice <= 0) {
    result.push(0);
    result.push(startPriceOld - startPriceNew);
    return result;
  } else {
    while (diffPrice >= 0) {
      if (month % 2 == 0) {
        percentLossByMonth += 0.5;
      }
      startPriceOld = startPriceOld * ((100 - percentLossByMonth) / 100);
      startPriceNew = startPriceNew * ((100 - percentLossByMonth) / 100);
      money = savingPerMonth * month + startPriceOld;
      diffPrice = startPriceNew - money;
      month++;
    }
    result.push(month - 1);
    result.push(Math.round(money - startPriceNew));
    return result;
  }
}

export {nbMonths};
