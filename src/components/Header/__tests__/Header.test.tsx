import { render, screen } from "@testing-library/react";
import Header from "..";
import { MemoryRouter } from "react-router-dom";

describe("Testes do componente Header", () => {
  const route = "/portifolio/home";

  test("Snapshot do componente", () => {
    const { container } = render(
      <MemoryRouter initialEntries={[route]}>
        <Header />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test("O logo esta sendo renderizado", () => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <Header />
      </MemoryRouter>
    );
    const madrugaLogo = screen.getByRole("img", {
      name: /logo de madruga/i,
    });
    expect(madrugaLogo).toBeInTheDocument();
  });

  test("O nome está sendo renderizado", () => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <Header />
      </MemoryRouter>
    );
    const madrugaName = screen.getByText(/<uciano mâncio\/>/i);
    expect(madrugaName).toBeInTheDocument();
  });

  test("A navBar está sendo renderizada", () => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <Header />
      </MemoryRouter>
    );
    const navBar = screen.getByRole("navigation");
    expect(navBar).toBeInTheDocument();
  });
});
