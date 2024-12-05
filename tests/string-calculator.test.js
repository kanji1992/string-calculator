const StringCalculator = require("../services/string-calculator");
const calculator = new StringCalculator();

test("should return 0 for an empty string", () => {
  expect(calculator.add("")).toBe(0);
});

test("shuld return single number if provided single", () => {
  expect(calculator.add("1")).toBe(1);
});

test("should return sum of multiple comma seperated numbers", ()=>{
    expect(calculator.add("1,2,3,4,5,6,7")).toBe(28)
})

  
  