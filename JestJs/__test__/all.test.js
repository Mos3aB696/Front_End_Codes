import numbers from "../all";

test("array has 6 elements", () => {
  expect(numbers.length).toBe(6);
});

test("array has 6 elements", () => {
  // toHaveLength() is used to check the length of an array
  expect(numbers).toHaveLength(6);
});

test("array containes Number 2", () => {
  // toContain() is used to check if an array or string contains a particular element.
  expect(numbers).toContain(2);
});

// You Can Use Normal Js Conspects [if, else, for, while, switch, etc.]
test("array not cantaines number 8", () => {
  for (let i = 0; i < numbers.length; i++) {
    // not is used to check if the value is not equal to the expected value.
    expect(numbers[i]).not.toBe(8);
  }
});

test("array containes only numbers", () => {
  for (let i = 0; i < numbers.length; i++) {
    expect(isNaN(numbers[i])).toBe(false);
  }
});

test("array containes only numbers", () => {
  for (let i = 0; i < numbers.length; i++) {
    expect(isNaN(numbers[i])).toBeFalsy();
  }
});

test("array containes only numbers", () => {
  for (let i = 0; i < numbers.length; i++) {
    expect(isNaN(numbers[i])).not.toBeTruthy();
  }
});

test("first element is more than 1", () => {
  // toBeGreaterThan() is used to check if the value is greater than the expected value.
  expect(numbers[0]).not.toBeGreaterThan(1);
});

test("first element is more than 1", () => {
  // toBeGreaterThanOrEqual() is used to check if the value is greater than or equal to the expected value.
  expect(numbers[0]).toBeGreaterThanOrEqual(1);
});

test("first element is more than 1", () => {
  // toBeLessThan() is used to check if the value is less than the expected value.
  expect(numbers[0]).toBeLessThan(5);
});

test("first element is more than 1", () => {
  // toBeLessThanOrEqual() is used to check if the value is less than or equal to the expected value.
  expect(numbers[0]).toBeLessThanOrEqual(1);
});

it("check for undefined", () => {
  // toBeUndefined() is used to check if the value is undefined.
  let a;
  expect(a).toBeUndefined();
});

it("check for null", () => {
  // toBeNull() is used to check if the value is null.
  let a = null;
  expect(a).toBeNull();
});

it("check by RegExp", () => {
  // toMatch() is used to check if the value matches the regular expression.
  expect("Hello World From Jest").toMatch(/from/i);
});

it("check by object", () => {
  // toHaveProperty() is used to check if the object has the specified property.
  let data = {
    name: "mos3ab",
    age: 23,
  };
  expect(data).toHaveProperty("name");
});

it("check by object", () => {
  let data = {
    name: "mos3ab",
    age: 23,
  };
  expect(data).toHaveProperty("age", 23);
});

// Can Create Custom Matchers

expect.extend({
  toBeOdd(received) {
    const pass = received % 2 === 1;
    if (pass) {
      return {
        message: () => `Your Namber ${received} Is Odd`,
        pass: true,
      };
    } else {
      return {
        message: () => `Error: Your Namber ${received} Is Not Odd`,
        pass: false,
      };
    }
  },
  toBeEven(received) {
    const pass = received % 2 === 0;
    if (pass) {
      return {
        message: () => `Your Namber ${received} Is Even`,
        pass: true,
      };
    } else {
      return {
        message: () => `Error: Your Namber ${received} Is Not Even`,
        pass: false,
      };
    }
  },
  // range matcher
  theRange(received, start, end) {
    const pass = received >= start && received <= end;
    if (pass) {
      return {
        message: () => `Expected ${received} to be between ${start} and ${end}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error: Expected ${received} to be between ${start} and ${end}`,
        pass: false,
      };
    }
  },
});

it("check for odd number", () => {
  expect(3).toBeOdd();
});

it("check for even number", () => {
  expect(2).toBeEven();
});

it("check for range", () => {
  expect(2024).theRange(2000, 2024);
});

test("expect anything", () => {
  // expect.anything() is used to check if the value is not null or undefined.
  expect(1).toEqual(expect.anything());
  expect("Mos3aB").toEqual(expect.anything());
  expect([1, 2, 3, 4, 5]).toEqual(expect.anything());
  expect({ name: "Mos3aB", age: 23 }).toEqual(expect.anything());
});

it.skip("expect anything failed", () => {
  // All Of This Will Pass
  // But If Going To Undefined Or NULL Will Fail
  let a;
  expect(a).toEqual(expect.anything()); // Undefined => Fail
  expect(null).toEqual(expect.anything()); // Null => Fail
});

it("expect constructor", () => {
  // expect.any() is used to check if the value is an instance of the expected class.
  expect(2).toEqual(expect.any(Number));
  expect("Mos3aB").toEqual(expect.any(String));
  expect([1, 2, 3, 4, 5]).toEqual(expect.any(Array));
  expect({ name: "Mos3aB", age: 23 }).toEqual(expect.any(Object));
});

it("expect arrayContaining", () => {
  // expect.arrayContaining() is used to check if the array contains the expected elements.
  // sorting doesn't matter
  expect([1, 2, 3, 4, 5]).toEqual(expect.arrayContaining([1, 2, 3]));
  expect([1, 2, 3, 4, 5]).toEqual(expect.arrayContaining([1, 5, 3]));
  expect([1, 2, 3, 4, 5]).toEqual(expect.arrayContaining([1, 5, 3, 2, 4]));
});

it.skip("expect arrayContaining", () => {
  // if there is a missing element, the test will fail
  expect([1, 2, 3, 4, 5]).toEqual(expect.arrayContaining([1, 2, 3, 6]));
});
