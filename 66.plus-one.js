/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
          digits[i] += 1;
          return digits;
        }
        digits[i] = 0;
      }
    
      let result = new Array(digits.length + 1).fill(0);
      result[0] = 1;
      return result;


};
// @lc code=end

