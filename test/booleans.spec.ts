import {expect} from 'chai';
import {jsBoolSqlInt, sqlIntJsBool, jsBoolSqlString, sqlStringJsBool} from '../src';

describe('JS Boolean to SQL Integer', () => {
  it('True should return 1', () => {
    expect(jsBoolSqlInt(true)).to.be.equal(1);
  });

  it('False should return 0', () => {
    expect(jsBoolSqlInt(false)).to.be.equal(0);
  });
});

describe('SQL Integer to JS Boolean', () => {
  it('Number that is not 0 should return true', () => {
    expect(sqlIntJsBool(1)).to.be.equal(true);
    expect(sqlIntJsBool(0.1)).to.be.equal(true);
    expect(sqlIntJsBool(999)).to.be.equal(true);
    expect(sqlIntJsBool(-1)).to.be.equal(true);
    expect(sqlIntJsBool(-0.1)).to.be.equal(true);
    expect(sqlIntJsBool(-999)).to.be.equal(true);
  });

  it('Zero should return false', () => {
    expect(sqlIntJsBool(0)).to.be.equal(false);
  });
});

describe('JS Boolean to SQL String', () => {
  it('True should return \'true\'', () => {
    expect(jsBoolSqlString(true)).to.be.equal('true');
  });

  it('False should return \'false\'', () => {
    expect(jsBoolSqlString(false)).to.be.equal('false');
  });
});

describe('SQL String to JS Boolean', () => {
  it('Any string that is not empty and not \'false\' should return true', () => {
    expect(sqlStringJsBool('true')).to.be.equal(true);
    expect(sqlStringJsBool('a')).to.be.equal(true);
    expect(sqlStringJsBool('not true')).to.be.equal(true);
  });

  it('An empty string or \'false\' should return false', () => {
    expect(sqlStringJsBool('false')).to.be.equal(false);
    expect(sqlStringJsBool('')).to.be.equal(false);
  });
});
