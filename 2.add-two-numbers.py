#
# @lc app=leetcode id=2 lang=python3
#
# [2] Add Two Numbers
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        count =0 
        head = ListNode()
        cur = head
        while l1 or l2 or count ==1:
            if not l1:
                l1 = ListNode()
            if not l2:
                l2 = ListNode()
            
            #cur.next = ListNode()
            #cur = cur.next
            
            cur.val = (l1.val+ l2.val + count) % 10
            
            if (l1.val+ l2.val + count) >9 :
                count = 1
            else:
                count = 0
            
            
            l1 = l1.next
            l2 = l2.next
        return head.next
           
# @lc code=end

