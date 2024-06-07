import hello from "../mock";
/**
 * toHaveBeenCalled: It is used to check if the mock function was called.
 * toHaveBeenCalledTimes: It is used to check how many times the mock function was called.
 * toHaveBeenCalledWith: It is used to check if the mock function was called with specific arguments.
 * toHaveBeenLastCalledWith: It is used to check if the mock function was
    called with specific arguments as the last call.
 */
test("mock function", () => {
  const mocker = jest.fn((name) => `Hello ${name}`);
  expect(mocker("World")).toBe("Hello World");
  expect(mocker("Mos3aB")).toBe("Hello Mos3aB");
  expect(mocker("Ahmed")).toBe("Hello Ahmed");
  expect(mocker).toHaveBeenCalled();
  expect(mocker).toHaveBeenCalledTimes(3);
  expect(mocker).toHaveBeenCalledWith("Mos3aB");
  expect(mocker).toHaveBeenLastCalledWith("Ahmed");
});
