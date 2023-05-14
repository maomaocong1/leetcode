#
# @lc app=leetcode id=129 lang=python3
#
# [129] Sum Root to Leaf Numbers
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        path=""
        res =[]
        def dfs(path,root):
            if root:
                path = path +str(root.val)
                if root.left == None and root.right == None:
                    res.append(path)
                dfs(path,root.left)
                dfs(path,root.right)
                    
        dfs(path,root)
        sum = 0
        for num in res:
            sum+=int(num)
        return sum
        
        
# @lc code=end

