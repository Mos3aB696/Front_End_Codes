import { sayHello } from "../say";

// test(name, fn, timeout)
// it(name, fn, timeout)
test("Say Jest Message", () => {
  expect(sayHello("Mos3aB")).toBe("Hello Mos3aB");
});
