import { describe, it, expect } from "vitest";
import { formatSSS } from "../formatsss";

describe("formatSSS", () => {
  it("should be a function", () => {
    expect(typeof formatSSS).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => formatSSS(null as any)).toThrow();
  });
});
