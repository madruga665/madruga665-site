import { render, screen } from "@testing-library/react";
import Brand from "..";

describe("Testes do componente Brand", () => {
  test("Snapshot do componente", () => {
    const { container } = render(<Brand />);

    expect(container).toMatchSnapshot();
  });
  test("O logo esta sendo renderizado", () => {
    render(<Brand />);
    const madrugaLogo = screen.getByRole("img", {
      name: /logo de madruga/i,
    });
    expect(madrugaLogo).toBeInTheDocument();
  });
  test("O nome está sendo renderizado", () => {
    render(<Brand />);
    const madrugaName = screen.getByText(/<uciano mâncio\/>/i);
    expect(madrugaName).toBeInTheDocument();
  });
});
