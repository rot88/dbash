/**
 * Converts JS boolean to SQL integer. May be null
 * @param input JS boolean value to be converted
 * @returns 1, 0 or null, depending on input
 */
export function jsBoolSqlInt(input: boolean | null): number | null {
    if (input == null) {
        return null;
    } else {
        return input ? 1 : 0;
    }
}