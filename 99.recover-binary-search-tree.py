#
# @lc app=leetcode id=99 lang=python3
#
# [99] Recover Binary Search Tree
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def recoverTree(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        def inorder(root:TreeNode)->List[int]:
            return inorder(root.left)+[root.val]+inorder(root.right) if root else []
        
        def find_two_swapped(nums: List[int]) -> (int, int):
            n = len(nums)
            x = y = None # Initialize x and y as a value that cannot be the value of a node.
            for i in range(n - 1):
                if nums[i + 1] < nums[i]:
                    y = nums[i + 1]
                    # first swap occurrence
                    if x is None:     
                        x = nums[i]
                    # second swap occurrence
                    else:           
                        break
            return x, y
        
        def recover(r: TreeNode, count: int):
            if r:
                if r.val == x or r.val == y:
                    r.val = y if r.val == x else x
                    count -= 1
                    if count == 0:
                        return      
                recover(r.left, count)
                recover(r.right, count)
            
        nums = inorder(root)
        x, y = find_two_swapped(nums)
        recover(root, 2)
# @lc code=end

