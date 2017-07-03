'use strict';

let expect  = require('chai').expect;
let primeNumbers = require('../app/index.js');

let expected = [];

describe("primeNumbers() for invalid inputs", function() {
    it("less than zero", function() {
        expect(primeNumbers(-1).toString()).to.equal(expected.toString());
    });
    
    it("equal to zero", function() {
        expect(primeNumbers(0).toString()).to.equal(expected.toString());
    });
 });


describe("primeNumbers() for valid inputs", function() {
    it("8", function() {

        expected = [2, 3, 5];

        expect(primeNumbers(5).toString()).to.equal(expected.toString());
    });

    it("20", function() {

        expected = [2, 3, 5, 7, 11, 13, 17, 19];

        expect(primeNumbers(19).toString()).to.equal(expected.toString());
    });


    it("100", function() {

        expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

        expect(primeNumbers(100).toString()).to.equal(expected.toString());
    });

    it("60", function() {

        expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

        expect(primeNumbers(60).toString()).to.equal(expected.toString());
    });

    it("90", function() {

        expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89];

        expect(primeNumbers(90).toString()).to.equal(expected.toString());
    });

    it("53", function() {

        expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53];

        expect(primeNumbers(53).toString()).to.equal(expected.toString());
    });

    it("11", function() {

        expected = [2, 3, 5, 7, 11];

        expect(primeNumbers(11).toString()).to.equal(expected.toString());
    });
it("15", function() {

        expected = [2, 3, 5, 7, 11, 13];

        expect(primeNumbers(15).toString()).to.equal(expected.toString());
    });

    it("40", function() {

        expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

        expect(primeNumbers(40).toString()).to.equal(expected.toString());
    });

    it("99", function() {

        expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

        expect(primeNumbers(99).toString()).to.equal(expected.toString());
    });

 });
