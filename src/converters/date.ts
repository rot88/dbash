import { datePad } from '../utils/functions';
import { ValueError } from '../utils/errors';
import { dateRegEx } from '../utils/regexes'

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

/**
 * Converts SQL Date to JS Date. May be null
 * @param input SQL Date value to be converted
 * @returns JS Date or null, depending on input
 */
export function sqlDateJsDate(input: string | null): Date | null {
    if (input == null) {
        return null;
    } else {
        if (dateRegEx.test(input)) {
            const dateArray = input.split('-');
            return new Date(
                +dateArray[0],
                +dateArray[1] - 1,
                +dateArray[2]
            );
        } else {
            throw new ValueError('Input is not valid SQL Date string');
        }
    }
}