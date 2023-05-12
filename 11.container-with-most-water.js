/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(nums) {
    let area=0;
    let l =0;
    let r = nums.length-1;

    while(l < r) {
        area = Math.max(Math.min(nums[l],nums[r])*(r-l),area);
        if(nums[l] < nums[r]){
            l++;
        }else{
            r--;
        }
    }

    return area;
};
// @lc code=end

