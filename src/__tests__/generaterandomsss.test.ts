import { describe, it, expect } from "vitest";
import { generateRandomSSS } from "../generaterandomsss";

describe("generateRandomSSS", () => {
  it("should be a function", () => {
    expect(typeof generateRandomSSS).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => generateRandomSSS(null as any)).toThrow();
  });
});
