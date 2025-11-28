import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  it("renders banana heading and CTAs", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /Bananas: Nature's Perfect Snack/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Explore banana facts")).toBeInTheDocument();
    expect(screen.getByText("Banana recipes")).toBeInTheDocument();
  });

  it("shows key banana facts", () => {
    render(<Home />);
    expect(screen.getByText(/Rich in potassium/i)).toBeInTheDocument();
    expect(screen.getByText(/Ripeness guide/i)).toBeInTheDocument();
  });
});