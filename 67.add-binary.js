/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let m = a.length - 1;
  let n = b.length - 1;
  let sb = [];
  let carry = 0;

  while (m >= 0 || n >= 0 || carry === 1) {
    let sum = 0;
    if (m >= 0) {
      sum += parseInt(a.charAt(m--));
    }
    if (n >= 0) {
      sum += parseInt(b.charAt(n--));
    }
    sum += carry;
    sb.push(sum % 2);
    carry = Math.floor(sum / 2);
  }

  if (carry !== 0) {
    sb.push(1);
  }

  return sb.reverse().join("");

};
// @lc code=end

