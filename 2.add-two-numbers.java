/*
 * @lc app=leetcode id=2 lang=java
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode cur = dummy;
        int carry = 0;
        while(l1!=null || l2!=null || carry !=0){
            int sum = 0;
            if(l1==null) l1 = new ListNode();
            if(l2==null) l2 = new ListNode();
            sum = (l1.val + l2.val+ carry)%10;
            carry = (l1.val + l2.val+ carry)/10;
            cur.next = new ListNode(sum);
            cur = cur.next;
            l1 = l1.next;
            l2 = l2.next;

        }
        return dummy.next;
        
    }
}
// @lc code=end

