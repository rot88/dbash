/**
 * Converts JS boolean to SQL integer.
 * @param input JS boolean value to be converted.
 * @returns 1 or 0, depending on input.
 */
export function jsBoolSqlInt(input: boolean): number {
  return input ? 1 : 0;
}

/**
 * Converts SQL integer to JS boolean.
 * @param input SQL integer value to be converted.
 * @returns true or false, depending on input.
 */
export function sqlIntJsBool(input: number): boolean {
  return input !== 0;
}
