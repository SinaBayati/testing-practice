import { capitalize } from './capitalize.js';

test("fOO => Foo", () => {
  expect(capitalize("fOO")).toBe("Foo");
});

test("bAr => Bar", () => {
  expect(capitalize("bAr")).toBe("Bar");
});

test("baz => Baz", () => {
  expect(capitalize("baz")).toBe("Baz");
});