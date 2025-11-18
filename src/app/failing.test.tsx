import React from "react";

describe("Intentional failing test", () => {
  it("should fail to demonstrate watch mode", () => {
    expect(true).toBe(false);
  });
});