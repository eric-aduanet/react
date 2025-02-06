import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Probando el componente CounterApp", () => {
  const initialValue = 10;
  test("Probar que la pagina haga match con el snapshot", () => {
    const value = 100;
    const page = render(<CounterApp value={value} />);
    expect(page).toMatchSnapshot();
  });

  test("Probar que el valor inicial de la pagina sea 100", () => {
    const value = 100;
    render(<CounterApp value={value} />);
    expect(screen.getByTestId("contador").innerHTML).toEqual(value.toString());
  });

  test("Debe incrementar con el boton +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });
  test("Debe decrementar con el boton -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy();
  });
  test("Debe funcionar el boton de reset", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByText("10")).toBeTruthy();
  });
});
