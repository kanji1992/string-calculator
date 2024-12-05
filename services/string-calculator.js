class StringCalculator {
  add(number) {
    if (!number) return 0;
    let delimiter = /,|\n/;
    if (number.startsWith("//")) {
      const parts = number.split("\n");
      delimiter = new RegExp(parts[0].slice(2));
      number = parts[1];
    }
    const arry = number.split(delimiter).map(Number);
    const negatives = arry.filter((num) => num < 0);
    if (negatives.length) {
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return arry.reduce((totalSum, number) => totalSum + number, 0);
  }
}
module.exports = StringCalculator;
