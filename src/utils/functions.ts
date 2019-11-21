export function twoPad(input: number): string {
  return (input + '').padStart(2, '0');
}

export function fourPad(input: number): string {
  return (input + '').padStart(4, '0');
}
