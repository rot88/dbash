import { expect } from 'chai';
import { jsBoolSqlInt } from '../src/jsBoolSqlInt';

describe('JS Boolean to SQL Integer', () => {
    it('True should return 1', () => {
        expect(jsBoolSqlInt(true)).to.be.equal(1);
    });

    it('False should return 0', () => {
        expect(jsBoolSqlInt(false)).to.be.equal(0);
    });

    it('Null should return null', () => {
        expect(jsBoolSqlInt(null)).to.be.equal(null);
    });
});