import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock next/font/google to avoid runtime font loader issues in tests
vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "geist-sans" }),
  Geist_Mono: () => ({ variable: "geist-mono" }),
}));