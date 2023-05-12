/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    


    function backtrack(first = 0) {
        if (first === n) {
          output.push([...nums]);
        }
        for (let i = first; i < n; i++) {
          [nums[first], nums[i]] = [nums[i], nums[first]];
          backtrack(first + 1);
          [nums[first], nums[i]] = [nums[i], nums[first]];
        }
      }
      const n = nums.length;
      const output = [];
      
      backtrack();
      return output;
    
}
// @lc code=end

