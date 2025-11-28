import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page - red pandas section", () => {
  it("renders the red pandas section heading", () => {
    render(<Home />);
    expect(screen.getByText(/About red pandas/i)).toBeInTheDocument();
  });

  it("includes descriptive text about red pandas", () => {
    render(<Home />);
    expect(
      screen.getByText(/Red pandas are small, tree-dwelling mammals/i)
    ).toBeInTheDocument();
  });
});
