import { sum } from "../sum";

/*
  describe(msg, fn) is used for grouping tests together. [You Can Use Nested describe() Blocks]
  test(msg, fn, timeout) is used for writing individual test cases.
  it(msg, fn, timeout) is used for writing individual test cases.
  expect(fn) is a function used to start an assertion in Jest
  toBe(value) is a specific matcher function that checks for strict equality between two values.
  only() is used to run only the specified test case.
  skip() is used to skip the specified test case.


  Note That:
==== test() ====

      is the modern way to write tests in Jest.
      is more readable and the preferred way to write tests in Jest.

==== it() ====

      is the older way to write tests in Jest.
      is still supported in Jest.
      may be deprecated in the future.
*/

/**
 * Coverage Report
 * Get the coverage report by running the following command:
 * npm test -- --coverage | You Can Edit package.json
 * Coverage Report help you to know how many lines of code you have tested
 * It very helpful in large projects
 */

describe("Test sum function", () => {
  // test block
  it("No Value", () => {
    expect(sum()).toBe(0);
  });

  it.skip("One Value", () => {
    expect(sum(1)).toBe(1);
  });

  it("sums two values", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("sums three values", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });

  it("sums many values", () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("sums negative values", () => {
    expect(sum(-1, -2, -3, -4, -5)).toBe(-15);
  });
});
