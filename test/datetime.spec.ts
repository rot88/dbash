import {expect} from 'chai';
import {jsDateSqlDateTime, sqlDateTimeJsDate} from '../src';
import {ValueError} from '../src/utils/errors';

describe('JS Date to SQL DateTime', () => {
  it('Valid JS Date should return valid SQL DateTime', () => {
    expect(jsDateSqlDateTime(new Date(2010, 6, 28, 11, 12, 13))).to.be.equal('2010-07-28 11:12:13');
  });

  it('Year that is not between 0 and 10000 should throw ValueError', () => {
    expect(() => jsDateSqlDateTime(new Date(10000, 6, 28))).to.throw(ValueError);
    expect(() => jsDateSqlDateTime(new Date(-1, 6, 28))).to.throw(ValueError);
  });
});

describe('SQL DateTime to JS Date', () => {
  it('Valid full SQL Date should return valid JS Date', () => {
    expect(sqlDateTimeJsDate('2010-07-28 11:12:13').getTime()).to.be.equal(new Date(2010, 6, 28, 11, 12, 13).getTime());
  });

  it('Valid short SQL Date should return valid JS Date', () => {
    expect(sqlDateTimeJsDate('10-07-28 11:12:13').getTime()).to.be.equal(new Date(2010, 6, 28, 11, 12, 13).getTime());
    expect(sqlDateTimeJsDate('97-07-28 11:12:13').getTime()).to.be.equal(new Date(1997, 6, 28, 11, 12, 13).getTime());
  });

  it('Invalid SQL Date should throw Error', () => {
    expect(() => sqlDateTimeJsDate('2010-07-28')).to.throw(ValueError);
  });
});
