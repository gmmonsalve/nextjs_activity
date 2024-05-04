/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "@/pages/home/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

/**
 * prueba de front-end que busca un elemento en el html en este caso. busca la frase welcome to next 
 */

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
