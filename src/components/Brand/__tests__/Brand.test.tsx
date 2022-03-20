import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Brand from "..";

describe("Testes do componente Brand", () => {
  test("Snapshot do componente", () => {
    const tree = renderer.create(<Brand />).toJSON();

    expect(tree).toMatchSnapshot();
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
