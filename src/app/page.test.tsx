import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  it("renders the Next.js and Vercel CTAs", () => {
    render(<Home />);
    expect(screen.getByText("Deploy now")).toBeInTheDocument();
    expect(screen.getByText("Read our docs")).toBeInTheDocument();
  });

  it("shows the getting started list items", () => {
    render(<Home />);
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
    expect(screen.getByText(/Save and see your changes instantly/i)).toBeInTheDocument();
  });

  it("renders footer navigation links with correct labels", () => {
    render(<Home />);
    expect(
      screen.getByRole("link", {
        name: /learn/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /examples/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /go to nextjs.org/i,
      })
    ).toBeInTheDocument();
  });

  it("renders Next.js logo image", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
  });
});