import { useTypographicScale } from ".";

it("Works with the modular scale, with settings", () => {
  expect(
    useTypographicScale(1, {
      name: "modular",
      settings: { base: [1], ratio: 1.33 },
    })
  ).toStrictEqual({
    fontSize: "1.33em",
  });
});

it("Works with the modular scale, without settings", () => {
  expect(useTypographicScale(1, { name: "modular" })).toStrictEqual({
    fontSize: "1.25em",
  });
});

it("Works with the linear scale", () => {
  expect(useTypographicScale(1, { name: "linear" })).toStrictEqual({
    fontSize: "2em",
  });
});

it("Works with the settings from the theme", () => {
  expect(useTypographicScale(1)).toStrictEqual({ fontSize: "2em" });
});
