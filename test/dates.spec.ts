import { expect } from 'chai';
import { jsDateSqlDate } from '../src/dates';

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