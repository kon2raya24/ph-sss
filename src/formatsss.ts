export function formatSSS(num: string): string {
  const cleaned = num.replace(/[^0-9]/g, "");
  if (cleaned.length !== 10) throw new Error("SSS must be 10 digits");
  return `${cleaned.slice(0,2)}-${cleaned.slice(2,9)}-${cleaned.slice(9)}`;
}
