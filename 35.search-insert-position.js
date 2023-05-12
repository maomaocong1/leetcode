/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var l=0;
    var r = nums.length-1;
    while(l<=r){
        let mid = l + (r-l)//2;
        if(target > nums[mid] && target < nums[mid + 1]){
            return mid+1;
        }else if (target<=nums[mid]){
            r= mid -1;
        }else{
            l = mid +1 ;
        }
    }
    //console.log(l + " " +r);
    return r+1;
    
};
// @lc code=end

