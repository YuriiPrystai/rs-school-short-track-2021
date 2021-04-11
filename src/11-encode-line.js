/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  let i = 0;
  let count = 0;
  let isAdded = false;
  while (i < str.length) {
    if (isAdded) {
      count = 0;
      isAdded = false;
    }
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      count++;
      if (count === 1) {
        result.push(str[i]);
      } else {
        result.push(String(count) + str[i]);
      }
      isAdded = true;
    }
    i++;
  }
  return result.join('');
}

module.exports = encodeLine;
