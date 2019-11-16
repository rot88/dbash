const yearRegEx = '(((20((3[0-7])|([0-2][0-9])))|(19[7-9][0-9]))|(([0-2][0-9])|(3[0-7])|([7-9][0-9])))';
const monthRegEx = '((1[0-2])|(0[0-9]))';
const dayRegEx = '(([0-2][0-9])|(3[0-1]))';

export const dateRegEx = new RegExp('^' + yearRegEx + '-' + monthRegEx + '-' + dayRegEx + '$');