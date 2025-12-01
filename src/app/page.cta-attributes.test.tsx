import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

/**
 * Check that CTA links open in a new tab with safe rel attributes.
 */
describe("Home page CTA attributes", () => {
  it("Buy Pink Peaches link has target _blank and noopener noreferrer", () => {
    render(<Home />);
    const buy = screen.getByRole("link", { name: /Buy Pink Peaches/i });
    expect(buy).toHaveAttribute("target", "_blank");
    expect(buy).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(buy).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });

  it("Learn About Pink Peaches link has target _blank and noopener noreferrer", () => {
    render(<Home />);
    const learn = screen.getByRole("link", { name: /Learn About Pink Peaches/i });
    expect(learn).toHaveAttribute("target", "_blank");
    expect(learn).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(learn).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });
});