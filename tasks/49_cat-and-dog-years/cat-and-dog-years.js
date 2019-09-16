function humanYearsCatYearsDogYears(humanYears) {
  let catYears = 15;
  let dogYears = 15;
  if (humanYears >= 2) {
    catYears += 9;
    dogYears += 9;
  }
  if (humanYears > 2) {
    catYears = catYears + (4 * (humanYears - 2));
    dogYears = dogYears + (5 * (humanYears - 2));
  }
  return [humanYears, catYears, dogYears];
}

export {humanYearsCatYearsDogYears};
