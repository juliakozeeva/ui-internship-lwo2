function humanYearsCatYearsDogYears(humanYears) {
  let catYears = 15;
  let dogYears = 15;
  if (humanYears >= 2) {
    catYears += 9;
    dogYears += 9;
  }
  for (let i = 3; i <= humanYears; i++) {
    catYears += 4;
    dogYears += 5;
  }
  return [humanYears, catYears, dogYears];
}

export {humanYearsCatYearsDogYears};
