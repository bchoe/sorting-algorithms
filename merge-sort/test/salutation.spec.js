const chai =require('chai');
const expect = chai.expect;
const mergeDivide = require('../merge.js');

describe('mergeDivide', () =>{

  it('should be a function', () => {
    expect(mergeDivide).to.be.a('function');
  });

  /* it('should merge sort a number', () =>{
    expect(mergeFunc([5,1,4,2,6,9,8])).to.deep.equal([1,2,4,5,6,8,9]);
  });*/
});