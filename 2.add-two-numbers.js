/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let carry = 0;
    let res = new ListNode();
    let head = res;
    while(l1 !=null || l2 !=null || carry ===1) {
        if(l1==null) l1 = new ListNode();
        if(l2==null) l2 = new ListNode();
        let sum = l1.val + l2.val + carry;
        if(sum > 9) {
            carry =1;
            sum %=10;
        }else{
            carry =0;
        }
        
        res.val = sum;
        l1 = l1.next;
        l2 = l2.next;
        if(l1 !=null || l2 !=null || carry ===1)
        {
            res.next = new ListNode();
            res = res.next;
        }
        
        
    }
    return head;


};
// @lc code=end

