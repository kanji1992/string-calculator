const StringCalculator = require("../services/string-calculator");
const calculator = new StringCalculator();

test("should return 0 for an empty string", () => {
  expect(calculator.add("")).toBe(0);
});

test("shuld return single number if provided single", () => {
  expect(calculator.add("1")).toBe(1);
});

test("should return sum of multiple comma seperated numbers", () => {
  expect(calculator.add("1,2,3,4,5,6,7")).toBe(28);
});

test("should handle new line as seperator", () => {
  expect(calculator.add("3\n2\n1,2")).toBe(8);
});

test("should handle custom seperator", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//;\n1;2")).toBe(3);
});

test("should throw an error when negative numbers are included", () => {
  const calculator = new StringCalculator();
  expect(() => calculator.add("1,-2,3,-4")).toThrow(
    "negative numbers not allowed: -2,-4"
  );
});
