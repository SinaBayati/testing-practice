import { caesarCipher } from './caesar-cipher';

test("lower case only with no wrapping", () => {
  expect(caesarCipher("abc",3)).toBe("def");
  expect(caesarCipher("cat",2)).toBe("ecv");
  expect(caesarCipher("yes",1)).toBe("zft");
});

test("mix of lower and upper case with no wrapping", () => {
  expect(caesarCipher("Abc",3)).toBe("Def");
  expect(caesarCipher("caT",2)).toBe("ecV");
  expect(caesarCipher("yEs",1)).toBe("zFt");
});

test("lower case only with wrapping", () => {
  expect(caesarCipher("yes",3)).toBe("bhv");
  expect(caesarCipher("zig",2)).toBe("bki");
  expect(caesarCipher("zap",3)).toBe("cds");
});

test("mix of lower and upper case with wrapping", () => {
  expect(caesarCipher("Yes",3)).toBe("Bhv");
  expect(caesarCipher("zIg",2)).toBe("bKi");
  expect(caesarCipher("zaP",3)).toBe("cdS");
});

test("punctuation preservation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
