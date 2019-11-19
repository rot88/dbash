import {datePad} from '../utils/functions';
import {ValueError} from '../utils/errors';
import {dateFullRegEx, dateShortRegEx} from '../utils/regexes'

/**
 * Converts JS Date to SQL Date. May be null.
 * @param input JS Date value to be converted.
 * @returns SQL Date string or null, depending on input.
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
 * Converts SQL Date to JS Date. May be null.
 * Accepts `2010-07-28` and `10-07-28` formats.
 * Years that are less than 1970 or more than 2037 throw ValueError.
 * @param input SQL Date value to be converted.
 * @returns JS Date or null, depending on input.
 */
export function sqlDateJsDate(input: string | null): Date | null {
  if (input == null) {
    return null;
  } else {
    if (dateFullRegEx.test(input)) {
      const dateArray = input.split('-');
      dateArray.map((n) => {
        +n;
      });
      return new Date(
        +dateArray[0],
        +dateArray[1] - 1,
        +dateArray[2]
      );
    } else if (dateShortRegEx.test(input)) {
      const dateArray = input.split('-');
      const numberDateArray = dateArray.map((n) => +n);
      numberDateArray[0] = numberDateArray[0] < 50 ? 2000 + numberDateArray[0] : 1900 + numberDateArray[0];
      return new Date(
        numberDateArray[0],
        numberDateArray[1] - 1,
        numberDateArray[2]
      );
    } else {
      throw new ValueError('Input is not valid SQL Date string');
    }
  }
}
