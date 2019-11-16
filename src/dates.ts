import { datePad } from './utils';

/**
 * Converts JS Date to SQL Date. May be null
 * @param input JS Date value to be converted
 * @returns SQL Date string or null, depending on input
 */
export function jsDateSqlDate(input: Date | null): string | null {
    if (input == null) {
        return null;
    } else {
        // @ts-ignore
        return input.getFullYear() + '-' + datePad(input.getMonth() + 1) + '-' + datePad(input.getDate());
    }
}