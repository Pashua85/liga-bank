export const getYearsWord = (years: number): string => {
  const lastDigit = years % 10;
  const lastTwoDigits = years % 100;
  let yearsString = ``;

  if (lastDigit === 1 && !(lastTwoDigits >= 11 && lastTwoDigits <= 14)) {
    yearsString = `год`;
  } else if (!(lastDigit === 1) && (lastTwoDigits >= 11 && lastTwoDigits <= 14)) {
    yearsString = `лет`;
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    yearsString = `года`;
  } else {
    yearsString = `лет`;
  }
  return yearsString;
};
