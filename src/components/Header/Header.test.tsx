import { render, screen } from "@testing-library/react";
import Header from ".";
import EnumHelper from "@/helpers/enumHelper";

describe("Header", () => {
  const enumHelper = new EnumHelper();
  const renderHeader = () => {
    render(<Header paths={enumHelper.paths} />);
  };

  test("Should render brand", () => {
    renderHeader();

    const madrugaLogo = screen.getByRole("img", {
      name: /logo de madruga/i,
    });
    const brandName = screen.getByRole("heading", {
      name: "< L uciano A mâncio/>",
    });

    expect(madrugaLogo).toBeInTheDocument();
    expect(brandName).toBeInTheDocument();
  });

  test("Should render navigation menu", () => {
    renderHeader();

    const navigationMenu = screen.getByRole("navigation");

    expect(navigationMenu).toBeInTheDocument();
  });
});
