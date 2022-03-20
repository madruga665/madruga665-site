import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import About from "..";

describe("Testes do componente About", () => {
  test("Snapshot do componente", () => {
    const tree = renderer.create(<About />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test("A imagem esta sendo renderizado", () => {
    render(<About />);
    const madrugaImage = screen.getByRole("img", {
      name: /luciano amancio/i,
    });
    expect(madrugaImage).toBeInTheDocument();
  });
  test("O texto 'sobre' está sendo renderizado", () => {
    render(<About />);
    const aboutText = screen.getByText(
      /olá, me chamo , tenho 34 anos e moro em guarujá\-sp\.sou pai da do e do \.sou desenvolvedor web full stack, formado pela e atualmente trabalho na criei esse site para mostrar um pouco de minhas habilidades e experiências \./i
    );
    expect(aboutText).toBeInTheDocument();
  });
});
