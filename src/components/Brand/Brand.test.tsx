import { render, screen } from "@testing-library/react";
import Brand from ".";

describe("Brand", () => {
  test("Should render brand elements", () => {
    render(<Brand />);

    const logo = screen.getByRole("img", {
      name: /logo de madruga/i,
    });
    const brand = screen.getByRole("heading", {
      level: 2
    });

    expect(logo).toBeInTheDocument();
    expect(brand).toBeInTheDocument();
  });
});
