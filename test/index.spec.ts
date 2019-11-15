import { expect } from 'chai';
import itWorks from '../src/index';

describe('CI/CD', () => {
  it('Should return true', () => {
    expect(itWorks()).to.be.equal(true);
  });
});
