import { sum } from "../sum";

it("No Value", () => {
  expect(sum()).toBe(0);
});

it("One Value", () => {
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
