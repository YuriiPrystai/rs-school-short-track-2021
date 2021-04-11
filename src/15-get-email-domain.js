/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const result = String(email.match(/@\w+.\w+\.\w+$/)).split('');
  result.splice(0, 1);
  return result.join('');
}

module.exports = getEmailDomain;
