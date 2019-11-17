import { expect } from 'chai';
import { jsBoolSqlInt, sqlIntJsBool } from '../src/converters/boolean';

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
