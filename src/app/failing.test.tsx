import React from "react";
import { describe, it, expect } from "vitest";

describe("Deliberately failing test suite", () => {
  it("should fail on purpose", () => {
    expect(true).toBe(false);
  });
});