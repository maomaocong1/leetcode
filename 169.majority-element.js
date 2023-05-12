/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counts = new Map();
    for (let i = 0; i < nums.length; i++) {
        counts.set(nums[i], (counts.get(nums[i]) || 0) + 1);
    }
    let majorityNum = nums[0];
    let majorityCount = counts.get(nums[0]);
    for (const [num, count] of counts) {
        if (count > majorityCount) {
            majorityNum = num;
            majorityCount = count;
        }
    }
    return majorityNum;
};
// @lc code=end

