import { describe, it, expect } from "vitest";

// Intentionally failing test to verify CI catches failures
// Remove or fix once you've validated your pipeline

describe("intentional failure", () => {
  it("should fail to demonstrate CI catching failures", () => {
    expect(1 + 1).toBe(3);
  });
});