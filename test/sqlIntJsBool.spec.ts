import { expect } from 'chai';
import { sqlIntJsBool } from '../src/sqlIntJsBool';

describe('SQL Integer to JS Boolean', () => {
  it('Number that is not 0 should return true', () => {
    expect(sqlIntJsBool(1)).to.be.equal(true);
    expect(sqlIntJsBool(0.1)).to.be.equal(true);
    expect(sqlIntJsBool(999)).to.be.equal(true);
  });

  it('Zero should return false', () => {
    expect(sqlIntJsBool(0)).to.be.equal(false);
  });

  it('Null should return null', () => {
    expect(sqlIntJsBool(null)).to.be.equal(null);
  });
});
