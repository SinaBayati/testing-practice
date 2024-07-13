import { reverseString } from "./reverse-string";

test("foo => oof", () => {
  expect(reverseString("foo")).toBe("oof");
});

test("Bar => raB", () => {
  expect(reverseString("Bar")).toBe("raB");
});

test("bAz => zAb", () => {
  expect(reverseString("bAz")).toBe("zAb");
});
