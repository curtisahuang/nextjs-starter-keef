import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  it("renders the Pink Peaches CTAs", () => {
    render(<Home />);
    expect(screen.getByText("Buy Pink Peaches")).toBeInTheDocument();
    expect(screen.getByText("Learn About Pink Peaches")).toBeInTheDocument();
  });

  it("highlights pink peaches only", () => {
    render(<Home />);
    expect(
      screen.getByText(/Only pink peaches\. No yellow allowed\./i)
    ).toBeInTheDocument();
  });
});