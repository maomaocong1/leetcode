/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique(nums) {
    const results = [];
  
    function backtrack(comb, counter) {
      if (comb.length === nums.length) {
        // make a deep copy of the resulting permutation,
        // since the permutation would be backtracked later.
        results.push([...comb]);
        return;
      }
  
      for (const num of Object.keys(counter)) {
        if (counter[num] > 0) {
          // add this number into the current combination
          comb.push(parseInt(num));
          counter[num]--;
          // continue the exploration
          backtrack(comb, counter);
          // revert the choice for the next exploration
          comb.pop();
          counter[num]++;
        }
      }
    }
  
    backtrack([], countOccurrences(nums));
  
    return results;
  }
  
  function countOccurrences(nums) {
    const counter = {};
    for (const num of nums) {
      if (!(num in counter))
        counter[num] = 0;
      counter[num]++;
    }
    return counter;
  }
  
// @lc code=end

