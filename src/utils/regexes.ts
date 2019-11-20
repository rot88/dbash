const yearShortRegEx = '([0-9]{2})';
const yearFullRegEx = '([0-9]{4})';
const monthRegEx = '((1[0-2])|(0[0-9]))';
const dayRegEx = '(([0-2][0-9])|(3[0-1]))';

export const dateShortRegEx = new RegExp('^' + yearShortRegEx + '-' + monthRegEx + '-' + dayRegEx + '$');
export const dateFullRegEx = new RegExp('^' + yearFullRegEx + '-' + monthRegEx + '-' + dayRegEx + '$');
