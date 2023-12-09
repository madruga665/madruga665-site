import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from ".";

describe("Button", () => {
  test("Should render button", () => {
    render(<Button label='ENVIAR' />);

    const button = screen.getByRole("button", {
      name: /enviar/i,
    });

    expect(button).toBeInTheDocument();
  });

  test("Should render button with loading", () => {
    render(<Button label='ENVIAR' loading />);

    const button = screen.getByRole("button", {
      name: /puff\-loading/i,
    });

    expect(button).toBeInTheDocument();
  });

  test("Should call onClick function", async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    render(<Button label='ENVIAR' onclick={onClick}/>);

    const button = screen.getByRole("button", {
      name: /enviar/i,
    });

    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
