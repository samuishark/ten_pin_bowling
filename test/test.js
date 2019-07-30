'use strict'

let bowling = require('../src/bowlingrules/bowling.js')

let assert = require('assert');

/**
 * So Test Driven Development is the concept of writing a test first
 * and then writing just enough code to satisfy the test.
 *
 * I set the test up for you and then you can fullfill the test.
 * I haven't added any code yet so you can start with creating the function and then make sure the test pass.
 *
 * run test with 'npm test'
 */

describe('Bowling game tests', function () {
    it('Test for zero value', function() {
        assert(bowling.calculateScore() ==  0)
    })
})
