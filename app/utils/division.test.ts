import { division } from "./division";

test("Test", () => {
  expect(division(10, 2)).toBe(5);
});


test("Test error: ", () => {
    expect(division(1, 0)).toBe("el divisor debe ser diferente de cero");
  });
  