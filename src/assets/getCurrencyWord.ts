export const getCurrencyWord = (amount: number): string => {
  const lastDigit = amount % 10;
  const lastTwoDigits = amount % 100;
  let currencyString = ``;

  if (lastDigit === 1 && !(lastTwoDigits >= 11 && lastTwoDigits <= 14)) {
    currencyString = `рубль`;
  } else if (!(lastDigit === 1) && (lastTwoDigits >= 11 && lastTwoDigits <= 14)) {
    currencyString = `рублей`;
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    currencyString = `рубля`;
  } else {
    currencyString = `рублей`;
  }
  return currencyString;
};
