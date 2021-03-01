const numberWithCommas = require("./addCommas");
const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("should convert 1000000 correctly", () => {
    expect(numberWithCommas(1000000)).toBe("1,000,000");
  });

  test("should convert 1234 correctly", () => {
    expect(numberWithCommas(1234)).toBe("1,234");
  });

  test("should convert 9876543210 correctly", () => {
    expect(numberWithCommas(9876543210)).toBe("9,876,543,210");
  });

  test("should convert 6 correctly", () => {
    expect(numberWithCommas(6)).toBe("6");
  });

  test("should convert -10 correctly", () => {
    expect(numberWithCommas(-10)).toBe("-10");
  });

  test("should convert -5678 correctly", () => {
    expect(numberWithCommas(-5678)).toBe("-5,678");
  });
  test("should convert 12345.678 correctly", () => {
    expect(numberWithCommas(12345.678)).toBe("12,345.678");
  });

  test("should convert -3141592.65 correctly", () => {
    expect(numberWithCommas(-3141592.65)).toBe("-3,141,592.65");
  });
});
