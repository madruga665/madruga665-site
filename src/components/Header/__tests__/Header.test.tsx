import { render, screen } from "@testing-library/react";
import Header from "..";

describe("Testes do componente Header", () => {
  test("Snapshot do componente", () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
  test("O logo esta sendo renderizado", () => {
    render(<Header />);
    const madrugaLogo = screen.getByRole("img", {
      name: /logo de madruga/i,
    });
    expect(madrugaLogo).toBeInTheDocument();
  });
  test("O nome está sendo renderizado", () => {
    render(<Header />);
    const madrugaName = screen.getByText(/<uciano mâncio\/>/i);
    expect(madrugaName).toBeInTheDocument();
  });
  test("A navBar está sendo renderizada", () => {
    render(<Header />);
    const navBar = screen.getByRole("navigation");
    expect(navBar).toBeInTheDocument();
  });
});
