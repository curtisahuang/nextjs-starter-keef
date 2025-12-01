import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

/**
 * Check that CTA links open in a new tab with safe rel attributes.
 */
describe("Home page CTA attributes (Pineapple)", () => {
  it("Pineapple facts link has target _blank and noopener noreferrer", () => {
    render(<Home />);
    const facts = screen.getByRole("link", { name: /Pineapple facts/i });
    expect(facts).toHaveAttribute("target", "_blank");
    expect(facts).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(facts).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });

  it("Buy pineapples link has target _blank and noopener noreferrer", () => {
    render(<Home />);
    const buy = screen.getByRole("link", { name: /Buy pineapples/i });
    expect(buy).toHaveAttribute("target", "_blank");
    expect(buy).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(buy).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });
});