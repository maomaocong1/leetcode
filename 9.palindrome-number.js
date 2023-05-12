/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0) return false;
    //console.log(x.toString().split('').reverse())
    return x === parseInt((x.toString().split('').reverse()).join(''));
    
};
// @lc code=end

