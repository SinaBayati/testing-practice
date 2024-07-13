import { calculator } from './calculator';

test("calculator.add", () => {
  expect(calculator.add(2,2)).toBe(4);
  expect(calculator.add(5000,20)).toBe(5020);
  expect(calculator.add(-10,3)).toBe(-7);
  expect(calculator.add(1,-5)).toBe(-4);
});

test("calculator.subtract", () => {
  expect(calculator.subtract(2,2)).toBe(0);
  expect(calculator.subtract(5000,20)).toBe(4980);
  expect(calculator.subtract(-10,3)).toBe(-13);
  expect(calculator.subtract(1,-5)).toBe(6);
});

test("calculator.multiply", () => {
  expect(calculator.multiply(2,2.5)).toBe(5);
  expect(calculator.multiply(5000,20)).toBe(100000);
  expect(calculator.multiply(-10,3)).toBe(-30);
  expect(calculator.multiply(1,-5)).toBe(-5);
});

test("calculator.divide", () => {
  expect(calculator.divide(2,0.2)).toBe(10);
  expect(calculator.divide(5000,50)).toBe(100);
  expect(calculator.divide(-100,2)).toBe(-50);
  expect(calculator.divide(1,5)).toBe(0.2);
});
