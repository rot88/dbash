import {twoPad} from '../utils/functions';
import {ValueError} from '../utils/errors';
import {dateFullRegEx, dateShortRegEx} from '../utils/regexes'

/**
 * Converts JS Date to SQL Date.
 * @param input JS Date value to be converted.
 * @returns SQL Date string.
 */
export function jsDateSqlDate(input: Date): string {
  if (input.getFullYear() < 0 || input.getFullYear() > 9999) {
    throw new ValueError(`Input year ${input.getFullYear()} is not supported by SQL.`);
  } else {
    return input.getFullYear() + '-' + twoPad(input.getMonth() + 1) + '-' + twoPad(input.getDate());
  }
}

/**
 * Converts SQL Date to JS Date. Accepts `2010-07-28` and `10-07-28` formats.
 * @param input SQL Date value to be converted.
 * @returns JS Date object.
 */
export function sqlDateJsDate(input: string): Date {
  if (dateFullRegEx.test(input)) {
    const dateArray = input.split('-');
    const numberDateArray = dateArray.map((n) => {
      return +n
    });

    return new Date(
      +numberDateArray[0],
      +numberDateArray[1] - 1,
      +numberDateArray[2]
    );
  } else if (dateShortRegEx.test(input)) {
    const dateArray = input.split('-');
    const numberDateArray = dateArray.map((n) => {
      return +n
    });

    numberDateArray[0] = numberDateArray[0] < 70 ? 2000 + numberDateArray[0] : 1900 + numberDateArray[0];

    return new Date(
      numberDateArray[0],
      numberDateArray[1] - 1,
      numberDateArray[2]
    );
  } else {
    throw new ValueError('Input is not valid SQL Date string');
  }
}
