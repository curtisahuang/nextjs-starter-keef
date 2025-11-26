import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

/**
 * Basic accessibility-oriented checks for images rendered on the Home page.
 */
describe("Home page images", () => {
  it("renders the Next.js logo with a descriptive alt text", () => {
    render(<Home />);
    const logo = screen.getByRole("img", { name: /Next\.js logo/i });
    expect(logo).toBeInTheDocument();
  });

  it("renders footer icons that are hidden from assistive tech", () => {
    render(<Home />);

    // Footer icons should be marked aria-hidden
    expect(screen.getByAltText("File icon")).toHaveAttribute("aria-hidden");
    expect(screen.getByAltText("Window icon")).toHaveAttribute("aria-hidden");
    expect(screen.getByAltText("Globe icon")).toHaveAttribute("aria-hidden");
  });
});