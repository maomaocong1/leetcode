/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const res =[];
    if(root){
        helper(root,res);
    }
    return res;
    
};

var helper = function(root,res){
    if(root){
        helper(root.left,res);
        helper(root.right,res); 
        res.push(root.val);

    }else{
        return res;
    }

};
// @lc code=end

