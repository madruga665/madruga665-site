import { render, screen } from "@testing-library/react";
import { NavLinks } from ".";
import EnumHelper from "@/helpers/enumHelper";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Navlinks", () => {
  const enumHelper = new EnumHelper();

  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/portifolio/home");
  });

  test("Should render Navlinks", () => {
    render(<NavLinks paths={enumHelper.paths} />);

    const navlinks = screen.getByRole("navigation");

    expect(navlinks).toBeInTheDocument();
  });

  test("Should render four li elements", () => {
    render(<NavLinks paths={enumHelper.paths} />);

    const navlinks = screen.getByRole("list").getElementsByTagName("li");

    expect(navlinks).toHaveLength(enumHelper.paths.length);
  });

  test("Should has one element with active class", () => {
    const { container } = render(<NavLinks paths={enumHelper.paths} />);

    const activeLink = container.getElementsByClassName("StyledListItemActive");

    expect(activeLink).toHaveLength(1);
  });
});
