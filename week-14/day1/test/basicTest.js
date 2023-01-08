const assert = require('assert')
const { describe } = require('mocha')

describe('BasicTest', function() {
    describe('Multiplication', function() {

    it('when 3*5 - should be 15', function() {
        var result = 5*3;
        assert.equal(result,15)
    })
    })
})