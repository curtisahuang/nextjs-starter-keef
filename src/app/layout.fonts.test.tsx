import React from "react";
import { render } from "@testing-library/react";
import RootLayout from "./layout";

/**
 * Asserts that the mocked next/font/google variables are applied to the top-level wrapper
 * by checking for class tokens anywhere in the rendered markup.
 */
describe("RootLayout fonts", () => {
  it("includes Geist font CSS variables in the rendered tree", () => {
    const { baseElement } = render(
      <RootLayout>
        <div>content</div>
      </RootLayout>
    );

    const markup = baseElement.outerHTML;
    expect(markup).toEqual(expect.stringContaining("geist-sans"));
    expect(markup).toEqual(expect.stringContaining("geist-mono"));
  });
});