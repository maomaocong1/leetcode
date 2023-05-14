#
# @lc app=leetcode id=114 lang=python3
#
# [114] Flatten Binary Tree to Linked List
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        if not root: return None
       
        res = []
        def dfs(path,root)-> Optional[TreeNode]:
            if root:
                
                res.append(root.val)
                dfs(res,root.left)
                dfs(res,root.right)
                
        dfs(res,root)
        
        for i in range(1,len(res)):
                root.left = None
                root.right = TreeNode(res[i])
                root = root.right

        
        
# @lc code=end

