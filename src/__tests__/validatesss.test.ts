import { describe, it, expect } from "vitest";
import { validateSSS } from "../validatesss";

describe("validateSSS", () => {
  it("should be a function", () => {
    expect(typeof validateSSS).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => validateSSS(null as any)).toThrow();
  });
});
