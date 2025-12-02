import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

/**
 * Check that primary CTA opens in a new tab with safe rel attributes.
 */
describe("Home page CTA attributes", () => {
  it("Explore recipes link has target _blank and noopener noreferrer", () => {
    render(<Home />);
    const cta = screen.getByRole("link", { name: /Explore recipes/i });
    expect(cta).toHaveAttribute("target", "_blank");
    expect(cta).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(cta).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });
});