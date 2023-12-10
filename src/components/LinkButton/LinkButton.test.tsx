import { render, screen } from "@testing-library/react";
import LinkButton from ".";

describe("LinkButton", () => {
  const urlMock = "https://donwload.com";
  const renderLinkButton = () => {
    render(<LinkButton url={urlMock}>Download</LinkButton>);
  };

  test("Should render LinkButton", () => {
    renderLinkButton();

    const linkButton = screen.getByRole("link", {
      name: "Download",
    });

    expect(linkButton).toBeInTheDocument();
  });

  test("Should has correct url", () => {
    renderLinkButton();

    const linkButton = screen.getByRole("link", {
      name: "Download",
    });

    expect(linkButton).toHaveAttribute("href", urlMock);
  });
});
