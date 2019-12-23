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

/**
 * Converts JS boolean to SQL string.
 * @param input JS boolean value to be converted.
 * @returns true or false, depending on input.
 */
export function jsBoolSqlString(input: boolean): string {
  return input ? 'true' : 'false';
}

/**
 * Converts SQL string to JS boolean.
 * @param input SQL string value to be converted.
 * @returns true or false, depending on input.
 */
export function sqlStringJsBool(input: string): boolean {
  return input !== '' && input !== 'false';
}
