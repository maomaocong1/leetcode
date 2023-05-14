#
# @lc app=leetcode id=109 lang=python3
#
# [109] Convert Sorted List to Binary Search Tree
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    l="l"
    r="r"
    def sortedListToBST(self, head: Optional[ListNode]) -> Optional[TreeNode]:
        
        tmp =[]
        while True:
            if head != None:
                tmp.append(head.val)
                head = head.next
            else:
                break
        return self.helper(tmp)
    
    def helper(self,tmp):
        if tmp:
            mid = len(tmp)//2
            root = TreeNode(tmp[mid])
            root.left = self.helper(tmp[:mid])
            root.right = self.helper(tmp[mid+1:])
            return root
        
        
        
# @lc code=end

