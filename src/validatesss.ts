export function validateSSS(num: string): boolean {
  const cleaned = num.replace(/[^0-9]/g, "");
  return /^\d{10}$/.test(cleaned);
}
