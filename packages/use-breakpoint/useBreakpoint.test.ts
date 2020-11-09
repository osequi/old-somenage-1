import { useBreakpoint } from ".";

/**
 * Invalid arguments cannot be passed, like useBreakpoint() or useBreakpoint('mobilex').
 * The tests will fail instantly without useBreakpoint being called.
 */
it("Returns an Emotion friendly query", () => {
  expect(useBreakpoint("mobile")).toContain("@media(min-width");
});

it("Returns a `min-width` query", () => {
  expect(useBreakpoint("mobile")).toContain("min-width");
});

it("Works for a valid name", () => {
  expect(useBreakpoint("mobile")).not.toBeNull();
});
