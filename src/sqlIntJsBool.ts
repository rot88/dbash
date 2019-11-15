/**
 * Converts SQL integer to JS boolean. May be null
 * @param input SQL integer value to be converted
 * @returns true, false or null, depending on input
 */
export function sqlIntJsBool(input: number | null): boolean | null {
    if (input == null) {
        return null;
    } else {
        return !(input === 0);
    }
}