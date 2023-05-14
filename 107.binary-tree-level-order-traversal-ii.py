#
# @lc app=leetcode id=107 lang=python3
#
# [107] Binary Tree Level Order Traversal II
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrderBottom(self, root: Optional[TreeNode]) -> List[List[int]]:
        res = []
        self.helper(root,0,res)
        return res[::-1]
    
    def helper(self, root: Optional[TreeNode],level:int,res:List[List[int]]):
        if root == None:
            return 
        if len(res)== level:
            res.append([])
        res[level].append(root.val)
        self.helper(root.left,level+1,res)
        self.helper(root.right,level+1,res)

        
# @lc code=end

