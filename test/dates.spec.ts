import {expect} from 'chai';
import {jsDateSqlDate, sqlDateJsDate} from '../src';
import {ValueError} from '../src/utils/errors';

describe('JS Date to SQL Date', () => {
  it('Valid JS Date should return valid SQL Date', () => {
    expect(jsDateSqlDate(
      new Date(
        2010,
        6,
        28
      )
    )).to.be.equal('2010-07-28');
  });

  it('Null should return null', () => {
    expect(jsDateSqlDate(null)).to.be.equal(null);
  });
});

describe('SQL Date to JS Date', () => {
  it('Valid full SQL Date should return valid JS Date', () => {
    // @ts-ignore
    expect(sqlDateJsDate('2010-07-28').getTime()).to.be.equal(new Date(2010, 6, 28).getTime());
  });

  it('Valid short SQL Date should return valid JS Date', () => {
    // @ts-ignore
    expect(sqlDateJsDate('10-07-28').getTime()).to.be.equal(new Date(2010, 6, 28).getTime());
    // @ts-ignore
    expect(sqlDateJsDate('97-07-28').getTime()).to.be.equal(new Date(1997, 6, 28).getTime());
  });

  it('Invalid SQL Date should throw Error', () => {
    expect(() => sqlDateJsDate('2010-07-283')).to.throw(ValueError);
  });

  it('Null should return null', () => {
    expect(sqlDateJsDate(null)).to.be.equal(null);
  });
});
