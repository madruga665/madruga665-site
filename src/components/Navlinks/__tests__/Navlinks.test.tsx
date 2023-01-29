import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavLinks from "..";

describe("Testes do componente NavLinks", () => {
  const route = "/portifolio/home";

  test("Snapshot do componente", () => {
    const { container } = render(
      <MemoryRouter initialEntries={[route]}>
        <NavLinks />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test("A navBar está sendo renderizada", () => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <NavLinks />
      </MemoryRouter>
    );
    const navBar = screen.getByRole("navigation");
    expect(navBar).toBeInTheDocument();
  });

  test("Quantidade de items de lista", () => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <NavLinks />
      </MemoryRouter>
    );
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(4);
  });
});
