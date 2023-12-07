import { render, screen, fireEvent } from "@testing-library/react";
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

  test("Should call onClick function", () => {
    const onClick = jest.fn();
    render(<Button label='ENVIAR' onclick={onClick}/>);

    const button = screen.getByRole("button", {
      name: /enviar/i,
    });

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
