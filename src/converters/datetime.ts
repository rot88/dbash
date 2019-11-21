import {fourPad, twoPad} from '../utils/functions';
import {ValueError} from '../utils/errors';
import {dateTimeFullRegEx, dateTimeShortRegEx} from '../utils/regexes'

/**
 * Converts JS Date to SQL DateTime.
 * @param input JS Date value to be converted.
 * @returns SQL Date string.
 */
export function jsDateSqlDateTime(input: Date): string {
  if (input.getFullYear() < 0 || input.getFullYear() > 9999) {
    throw new ValueError(`Input year ${input.getFullYear()} is not supported by SQL.`);
  } else {
    return fourPad(input.getFullYear()) + '-' +
      twoPad(input.getMonth() + 1) + '-' +
      twoPad(input.getDate()) + ' ' +
      twoPad(input.getHours()) + ':' +
      twoPad(input.getMinutes()) + ':' +
      twoPad(input.getSeconds());
  }
}

/**
 * Converts SQL DateTime to JS Date. Accepts `2010-07-28` and `10-07-28` formats.
 * @param input SQL Date value to be converted.
 * @returns JS Date object.
 */
export function sqlDateTimeJsDate(input: string): Date {
  if (dateTimeFullRegEx.test(input)) {
    const dateArray = input.split(/[- :]/);
    const numberDateArray = dateArray.map((n) => {
      return +n
    });

    return new Date(
      +numberDateArray[0],
      +numberDateArray[1] - 1,
      +numberDateArray[2],
      +numberDateArray[3],
      +numberDateArray[4],
      +numberDateArray[5],
    );
  } else if (dateTimeShortRegEx.test(input)) {
    const dateArray = input.split(/[- :]/);
    const numberDateArray = dateArray.map((n) => {
      return +n
    });

    numberDateArray[0] = numberDateArray[0] < 70 ? 2000 + numberDateArray[0] : 1900 + numberDateArray[0];

    return new Date(
      numberDateArray[0],
      +numberDateArray[1] - 1,
      +numberDateArray[2],
      +numberDateArray[3],
      +numberDateArray[4],
      +numberDateArray[5],
    );
  } else {
    throw new ValueError('Input is not valid SQL DateTime string');
  }
}
