import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout, { metadata } from "./layout";

describe("RootLayout", () => {
  it("renders children content", () => {
    render(
      <RootLayout>
        <div data-testid="child">Hello world</div>
      </RootLayout>
    );
    expect(screen.getByTestId("child")).toHaveTextContent("Hello world");
  });
});

describe("metadata", () => {
  it("contains the expected title and description", () => {
    expect(metadata.title).toBe("Pink Peaches");
    expect(metadata.description).toContain("pink peaches");
  });
});