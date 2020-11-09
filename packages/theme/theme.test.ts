import { theme } from ".";

it("It has an entry for typography.", () => {
  expect(theme.typography).not.toBeNull();
});

it("It's defined.", () => {
  expect(theme).not.toBeNull();
});
