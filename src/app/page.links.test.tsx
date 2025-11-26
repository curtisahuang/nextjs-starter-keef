import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

/**
 * Link rendering and href assertions for the Home page
 */
describe("Home page links", () => {
  it("renders primary call-to-action links with correct hrefs", () => {
    render(<Home />);

    const deploy = screen.getByRole("link", { name: /Deploy now/i });
    expect(deploy).toBeInTheDocument();
    expect(deploy).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com/new")
    );

    const docs = screen.getByRole("link", { name: /Read our docs/i });
    expect(docs).toBeInTheDocument();
    expect(docs).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org/docs")
    );
  });

  it("renders footer links with expected text and destinations", () => {
    render(<Home />);

    const learn = screen.getByRole("link", { name: /Learn/i });
    expect(learn).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org/learn")
    );

    const examples = screen.getByRole("link", { name: /Examples/i });
    expect(examples).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com/templates")
    );

    const homepage = screen.getByRole("link", { name: /Go to nextjs.org/i });
    expect(homepage).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org")
    );
  });
});