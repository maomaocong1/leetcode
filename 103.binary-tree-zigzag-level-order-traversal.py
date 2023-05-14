#
# @lc app=leetcode id=103 lang=python3
#
# [103] Binary Tree Zigzag Level Order Traversal
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        res =[]
        h=0
        def helper(root,res,h):
            if root:
                if len(res)==h:
                    res.append([])
                if h % 2==0:
                    res[h].append(root.val)
                else:
                    res[h].insert(0,root.val)
                helper(root.left,res,h+1)
                helper(root.right,res,h+1)
            
            
        helper(root,res,h)
        return res
    
        
# @lc code=end

