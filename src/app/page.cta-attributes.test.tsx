import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

/**
 * Check that CTA links open in a new tab with safe rel attributes.
 */
describe("Home page CTA attributes", () => {
  it("Deploy now link has target _blank and noopener noreferrer", () => {
    render(<Home />);
    const deploy = screen.getByRole("link", { name: /Deploy now/i });
    expect(deploy).toHaveAttribute("target", "_blank");
    expect(deploy).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(deploy).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });

  it("Read our docs link has target _blank and noopener noreferrer", () => {
    render(<Home />);
    const docs = screen.getByRole("link", { name: /Read our docs/i });
    expect(docs).toHaveAttribute("target", "_blank");
    expect(docs).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(docs).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });
});