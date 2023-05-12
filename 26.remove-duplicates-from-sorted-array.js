/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var cur =0;
    for(let i = 1; i<nums.length; i++){
        if (nums[cur] === nums[i]){
            continue;
        }else{
            cur +=1;
            nums[cur] = nums[i];
        }
    }
    return cur+1;
    
};
// @lc code=end

