/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root==null) return true;
    //console.log(maxDepth(root.left));
    //console.log(maxDepth(root.right));

    return (Math.abs(maxDepth(root.left) - maxDepth(root.right)) <=1)&&isBalanced(root.left)&&isBalanced(root.right);
};

var maxDepth = function(root){
    if (root==null)return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right))+1;
};

// @lc code=end

