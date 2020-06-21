var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect
var sumAll = require('../calculation.js')

describe('Calculation', () => {
  describe('sumAll', () => {
    it('returns the sum of the numbers in the array provided', () => {
      // setup test data
      var nums = [1, 2, 3, 4]

      // call the function with the test data
      var total = sumAll(nums)

      // asset what should be true
      expect(total).to.equal(10)
    })
  })
})