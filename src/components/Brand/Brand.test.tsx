import { render, screen } from "@testing-library/react";
import { Brand } from ".";

describe("Brand", () => {
  test("Should render brand elements", () => {
    render(<Brand />);

    const brand = screen.getByRole("heading", {
      name: /<\s*l\s*uciano\s*a\s*mâncio\s*\/>/i,
    });

    expect(brand).toBeInTheDocument();
  });
});
