/*
 * @lc app=leetcode id=26 lang=java
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
class Solution {
    public int removeDuplicates(int[] nums) {
        int left =0, right = 0;
        for (right = 0; right < nums.length; right++) {
            if(nums[left] == nums[right]) {continue;}
            else{
                nums[++left] = nums[right];
            }
        }
        return left + 1;
        
    }
}
// @lc code=end

