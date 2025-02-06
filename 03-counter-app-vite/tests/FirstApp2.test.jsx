import { getByTestId, getByText, render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("FirstApp", () => {
  const title = "Hola, soy Eric";
  test("Debe hacer match con el snapshot", () => {
    const container = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });
  test("Debe mostrar el titulo 'Hola, soy Eric'", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
  test("Debe mostrar el titulo en un h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(title);
  });
});
