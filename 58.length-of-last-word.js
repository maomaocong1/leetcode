/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var a = s.trim().split(" ");
    //console.log(a);
    return a[a.length-1].length;
};
// @lc code=end

