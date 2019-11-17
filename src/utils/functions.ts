export function datePad(input: number): string {
  return (input + '').padStart(2, '0');
}
