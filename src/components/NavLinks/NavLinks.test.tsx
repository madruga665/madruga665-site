import { render, screen } from "@testing-library/react";
import NavLinks from ".";
import EnumHelper from "@/helpers/enumHelper";

jest.mock("next/navigation", () => {
  const originalModule = jest.requireActual("next/navigation");

  return {
    __esModule: true,
    ...originalModule,
    usePathname: jest.fn(() => "/portifolio/home"),
  };
});

jest.mock("../../hooks/useHighlightPath", () => {
  const originalModule = jest.requireActual("../../hooks/useHighlightPath");

  return {
    __esModule: true,
    ...originalModule,
    isCurrentPage: jest.fn(() => true),
  };
});

describe("Navlinks", () => {
  const enumHelper = new EnumHelper();

  beforeEach(() => {
    jest.clearAllMocks();
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

    const activeLink = container.getElementsByClassName("LinkContainerActive");

    expect(activeLink).toHaveLength(1);
  });
});
