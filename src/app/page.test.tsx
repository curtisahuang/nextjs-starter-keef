import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  it("shows the Mango hero and sections", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: /King of Fruits/i })).toBeInTheDocument();
    expect(screen.getByText(/Popular Varieties/i)).toBeInTheDocument();
    expect(screen.getByText(/Why Mangoes\?/i)).toBeInTheDocument();
  });

  it("lists example mango varieties", () => {
    render(<Home />);
    expect(screen.getByText(/Alphonso/i)).toBeInTheDocument();
    expect(screen.getByText(/Kesar/i)).toBeInTheDocument();
    expect(screen.getByText(/Haden/i)).toBeInTheDocument();
  });
});