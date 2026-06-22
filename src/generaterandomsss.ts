/**
 * generateRandomSSS
 */
export function generateRandomSSS(): string {
  const sss = Array.from({length: 10}, () => Math.floor(Math.random() * 10)).join("");
  return formatSSS(sss);
}
