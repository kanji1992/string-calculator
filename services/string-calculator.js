class StringCalculator {
  add(number) {
    if (!number) return 0;
    const arry = number.replace(/\n/g,",")  .split(",").map(Number);
    return arry.reduce((totalSum, number) => totalSum + number, 0);
  }
}
module.exports = StringCalculator;
