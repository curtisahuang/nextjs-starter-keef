import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page (Pineapple)", () => {
  it("renders the pineapple headline and CTAs", () => {
    render(<Home />);
    expect(
      screen.getByText(/Welcome to Pineapple Paradise/i)
    ).toBeInTheDocument();
    expect(screen.getByText("Pineapple facts")).toBeInTheDocument();
    expect(screen.getByText("Buy pineapples")).toBeInTheDocument();
  });
});