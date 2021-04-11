/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayOfSeparatedNumbers = [];
  const arrayOfGivenNumber = String(n).split('');
  for (let i = 0; i < arrayOfGivenNumber.length; i++) {
    const copyOfArray = arrayOfGivenNumber.slice();
    copyOfArray.splice(i, 1);
    arrayOfSeparatedNumbers.push(copyOfArray.join(''));
  }
  return Math.max(...arrayOfSeparatedNumbers);
}

module.exports = deleteDigit;
