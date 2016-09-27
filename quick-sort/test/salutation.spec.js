const chai =require('chai');
const expect = chai.expect;
const qSort = require('../index.js');

describe('quick-sort', () => {

  it('should be a function', () =>{
    expect(qSort).to.be.a('function');
  });

  it('should quick sort a number', () => {
    expect(qSort([3,2,4,1,5])).to.deep.equal([1,2,3,4,5]);
    expect(qSort([3,2,4,1,5,8,7,6,9])).to.deep.equal([1,2,3,4,5,6,7,8,9]);
    expect(qSort([20,3,2,4,30,1,5,10])).to.deep.equal([1,2,3,4,5,10,20,30]);

  });

});