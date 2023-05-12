/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var nums;
var sortedArrayToBST = function(nums) {
    this.nums = nums;
     return     helper(0,nums.length-1);

};

var helper= function(left,right){
    if(left > right) return null;
    let p = Math.floor((left + right)/2);
    var root = new TreeNode(this.nums[p]);
    root.left = helper(left,p-1);
    root.right = helper(p+1,right);
    return root;
};
// @lc code=end

