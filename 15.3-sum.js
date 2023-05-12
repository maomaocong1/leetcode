/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    const n = nums.length;

    if (n < 3) {
        return result;
    }

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        if (nums[i] > 0) {
            break;
        }

        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = n - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum == 0) {
                result.push([nums[i], nums[j], nums[k]]);
                while (j < k && nums[j] == nums[j + 1]) {
                    j++;
                }
                while (j < k && nums[k] == nums[k - 1]) {
                    k--;
                }
                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }

    return result;
};
// @lc code=end

