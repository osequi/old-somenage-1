import { useTypographicGrid } from ".";

it("Works with the object notation", () => {
  expect(useTypographicGrid("object")).not.toBeNull();
});

it("Works with the string notation", () => {
  expect(useTypographicGrid("string")).not.toBeNull();
});
