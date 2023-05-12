/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var cur =0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]==val){
            continue;
        }else{
            nums[cur] = nums[i];
            cur +=1;
        }
    }
    return cur;
};
// @lc code=end

