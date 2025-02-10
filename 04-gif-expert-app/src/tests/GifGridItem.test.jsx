import { render } from "@testing-library/react";
import { GifGridItem } from "../components/GifGridItem";

describe("Probando el GifGridItem", () => {
  test("Debe hacer match con el snashot", () => {
    const title = "";
    const url = "";
    render(<GifGridItem />);
    expect(screen).toMatchSnapshot();
  });
});
