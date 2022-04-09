import { render, screen } from "@testing-library/react";
import About from "..";

describe("Testes do componente About", () => {
  test("Snapshot do componente", () => {
    const { container } = render(<About />);

    expect(container).toMatchSnapshot();
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
      /olá, me chamo luciano amâncio, tenho 34 anos e moro em guarujá-sp\. sou pai da julia do heitor e do dante\. sou desenvolvedor web full stack, formado pela trybe e atualmente trabalho na remessa online criei esse site para mostrar um pouco de minhas habilidades e experiências\./i
      )
    expect(aboutText).toBeInTheDocument();
  });
});
