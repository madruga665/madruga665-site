import { render, screen } from "@testing-library/react";
import { Header } from ".";
import EnumHelper from "@/helpers/enumHelper";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Header", () => {
  const enumHelper = new EnumHelper();
  const renderHeader = () => {
    render(<Header paths={enumHelper.paths} />);
  };

  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/");
  });

  test("Should render brand", () => {
    renderHeader();

    const brandName = screen.getByRole("heading", {
      name: /<\s*l\s*uciano\s*a\s*mâncio\s*\/>/i,
    });

    expect(brandName).toBeInTheDocument();
  });

  test("Should render navigation menu", () => {
    renderHeader();

    const navigationMenu = screen.getByRole("navigation");

    expect(navigationMenu).toBeInTheDocument();
  });

  test("Should highlight active link", () => {
    (usePathname as jest.Mock).mockReturnValue("/portifolio/home");
    renderHeader();

    const activeLink = screen.getByText("HOME").parentElement;
    expect(activeLink).toHaveClass("StyledListItemActive");
  });
});
