const {parseNumber} = require("./js/helper.js");

/**
 * Create an array filled by fibonacci sequence using loop way.
 *
 * @param {number} sequence
 */
function generateFibonacciUsingLoop(sequence) {
  sequence = parseNumber(sequence);

  let result = [];
  let prev = 0;
  let next = 1;

  for (let index = 0; index < sequence; index++) {
    result.push(prev);

    const current = prev + next;
    prev = next;
    next = current;
  }

  return result;
}

/**
 * Create an array filled by fibonacci sequence using recursive way.
 *
 * @param {number} sequence
 */
function generateFibonacciUsingRecursive(sequence) {
  /**
   * @param {number} n
   * @returns {number}
   */
  function fibonacci(n) {
    return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
  }

  sequence = parseNumber(sequence);

  let result = [];

  for (let index = 0; index < sequence; index++) {
    const current = fibonacci(index);

    result.push(current);
  }

  return result;
}

module.exports = { generateFibonacciUsingLoop, generateFibonacciUsingRecursive }

