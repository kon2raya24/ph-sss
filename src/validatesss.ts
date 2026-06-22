
// Type exports for consumers
// Add specific types as needed
export function validateSSS(num: string): boolean {
  const cleaned = num.replace(/[^0-9]/g, "");
  return /^\d{10}$/.test(cleaned);
}
