import { describe, it, expect } from "vitest";

// Demonstrates skipped tests in Vitest. These do not run and do not affect pass/fail.
describe("skipped examples", () => {
  it.skip("is intentionally skipped (simple case)", () => {
    expect(1 + 1).toBe(3);
  });

  it.skip("is intentionally skipped (async case)", async () => {
    const value = await Promise.resolve("hello");
    expect(value).toBe("world");
  });
});