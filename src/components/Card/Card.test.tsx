import { render, screen } from "@testing-library/react";
import Card from ".";

describe("Card", () => {
  const renderCard = () => {
    render(
      <Card
        img={"/public/assets/icons8-circled-m-80.png"}
        headerTitle={"Chapeiro"}
        headerSubtitle={"Hamburgueria 2000"}
        headerDate={"Fevereiro de 2005 - Março de 2013"}
        description={"Fazia altos lanchão da hr! aqueles pra matar a larica da noite!"}
      />
    );
  };

  test("Should render company image", () => {
    renderCard();

    const companyLogo = screen.getByRole("img", {
      name: "Hamburgueria 2000",
    });

    expect(companyLogo).toBeInTheDocument();
  });

  test("Should render role", () => {
    renderCard();

    const role = screen.getByRole("heading", {
      name: "Chapeiro",
    });

    expect(role).toBeInTheDocument();
  });

  test("Should render company name", () => {
    renderCard();

    const companyName = screen.getByRole("heading", {
      name: "Hamburgueria 2000",
    });

    expect(companyName).toBeInTheDocument();
  });

  test("Should render job description", () => {
    renderCard();

    const jobDescription = screen.getByText(
      "Fazia altos lanchão da hr! aqueles pra matar a larica da noite!"
    );

    expect(jobDescription).toBeInTheDocument();
  });
});
