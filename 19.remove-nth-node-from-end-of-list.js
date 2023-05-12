/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let index = 0;
    let dummy = new ListNode();
    dummy.next  = head;
    let cur = head;
    let pre = dummy;

    if(cur.next == null) {
        return null;
    }
    while(cur!=null){
        if(index == n){
            cur = cur.next;
            pre = pre.next;
            continue;
        }
        cur = cur.next;
        index++;

    }
    pre.next = pre.next.next ;
    
    return dummy.next;
};
// @lc code=end

