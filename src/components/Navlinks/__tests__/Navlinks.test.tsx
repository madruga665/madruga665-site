import { render, screen } from "@testing-library/react";
import NavLinks from "..";

describe("Testes do componente NavLinks", () => {
  test("Snapshot do componente", () => {
    const { container } = render(<NavLinks />);

    expect(container).toMatchSnapshot();
  });
  test("A navBar está sendo renderizada", () => {
    render(<NavLinks />);
    const navBar = screen.getByRole("navigation");
    expect(navBar).toBeInTheDocument();
  });
  test("Quantidade de items de lista", () => {
    render(<NavLinks />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(4);
  });
});
