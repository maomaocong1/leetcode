/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var mp = new Map();
    for(let i =0; i < nums.length; i++) {
        let tmp = target - nums[i];
        
        if (mp.has(tmp)){
            return [mp.get(tmp),i];
        }
        mp.set(nums[i],i);

    }
    
};
// @lc code=end

