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

  it("renders the Next.js logo image with alt text", () => {
    render(<Home />);
    expect(screen.getByAltText("Next.js logo")).toBeInTheDocument();
  });

  it("renders the Vercel logo in the deploy button", () => {
    render(<Home />);
    expect(screen.getByAltText("Vercel logomark")).toBeInTheDocument();
  });

  it("has footer links with correct labels", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: "Learn" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Examples" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Go to nextjs.org →" })).toBeInTheDocument();
  });

  it("has footer links with expected hrefs", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: "Learn" })).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org/learn")
    );
    expect(screen.getByRole("link", { name: "Examples" })).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com/templates")
    );
    expect(screen.getByRole("link", { name: "Go to nextjs.org →" })).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org")
    );
  });
});