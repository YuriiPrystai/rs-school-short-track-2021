/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1new = Array.from(s1);
  const s2new = Array.from(s2);
  let result = 0;
  for (let i = 0; i < s1new.length; i++) {
    if (s2new.indexOf(s1new[i]) !== -1) {
      result++;
      s2new.splice(s2new.indexOf(s1new[i]), 1);
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
