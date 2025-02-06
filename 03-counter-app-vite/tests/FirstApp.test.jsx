import { getByTestId, getByText, render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("FirstApp", () => {
  test("Debe hacer match con el snapshot", () => {
    const title = "Hola, soy Eric";
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
    // expect(container).toMatchSnapshot();
    // console.log(container);
  });
  test("Debe de mostrar el title en un h1", () => {
    const title = "Hola, soy Eric";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();
    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toBe(title);
    expect(getByTestId("test-title").innerHTML).toBe(title);
  });

  test("Debe mostrar el subtitulo enviado por props", () => {
    const title = "Hola, soy Eric";
    const subtitle = "Hoy soy un subtitulo";
    const { container, getAllByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );
    expect(getAllByText(subtitle).length).toBeGreaterThan(0);
  });
});
