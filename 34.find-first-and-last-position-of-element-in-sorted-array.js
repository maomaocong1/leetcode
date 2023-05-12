/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(N, T) {
    const Tleft = bisectLeft(N, T);
  if (Tleft === N.length || N[Tleft] !== T) return [-1, -1];
  return [Tleft, bisectRight(N, T) - 1];
};

var bisectLeft = function(nums, target) {
    let lo = 0, hi = nums.length;
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (nums[mid] < target) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    return lo;
};

var bisectRight = function(nums, target) {
    let lo = 0, hi = nums.length;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] <= target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
};

// @lc code=end

