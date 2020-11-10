import { useResponsiveFontSizes } from ".";

it("Works with the object notation", () => {
  expect(useResponsiveFontSizes("object")).not.toBeNull();
});

it("Works with the string notation", () => {
  expect(useResponsiveFontSizes("string")).not.toBeNull();
});
