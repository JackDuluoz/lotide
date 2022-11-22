# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @broadsword/lotide`

**Require it:**

`const _ = require('@broadsword/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  assertArraysEqual: Fundamentally the same as eqArrays.
  assertEqual: Asserts if two primitive type values are identical.
  assertObjectsEqual: Fundamentally the same as eqObjects. 
  countLetters: Returns the count of letters in a string as an object.  
  countOnly: Returns the count of specified values in an array as an object.
  eqArrays: Asserts if two arrays are identical using inspect.
  eqObjects: Asserts if two objects are identical using inspect.
  findKey: Finds the first key of a specified value in an object using callback.
  findKeyByValue: Finds the first key of a value in an object without callback.
  flatten: Returns nested arrays as one falltened array.
  head: Returns only the first element in an array.
  letterPositions:
  map: Iterates over an array and allows callback functions to be performed on     each element, producing a new, modified array of the same length.
  middle: Returns the middle index/indices of an array.
  tail: Omits the first element of an array and returns the new array.
  takeUntil: Pushes elements of an array into a new array until a desired element is reached.
  without: Given two array inputs, a first array is relieved of elements also contained in the second array.