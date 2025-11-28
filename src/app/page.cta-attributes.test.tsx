import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

/**
 * Check that CTA links open in a new tab with safe rel attributes.
 */
describe("Home page CTA attributes", () => {
  it("Explore banana facts link has target _blank and noopener noreferrer", () => {
    render(<Home />);
    const facts = screen.getByRole("link", { name: /Explore banana facts/i });
    expect(facts).toHaveAttribute("target", "_blank");
    expect(facts).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(facts).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });

  it("Banana recipes link has target _blank and noopener noreferrer", () => {
    render(<Home />);
    const recipes = screen.getByRole("link", { name: /Banana recipes/i });
    expect(recipes).toHaveAttribute("target", "_blank");
    expect(recipes).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(recipes).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });
});