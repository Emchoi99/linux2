const { sum, abs } = require("./index.js");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds absolute values of -100 and 50 to equal 150", () => {
  expect(abs(-100, 50)).toBe(150); // 절대값 테스트
});