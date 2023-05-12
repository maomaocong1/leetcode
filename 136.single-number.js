/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var res = 0;
    for(let i = 0; i < nums.length;i++ ){
        res ^=nums[i];
    }
    return res;
};
// @lc code=end

