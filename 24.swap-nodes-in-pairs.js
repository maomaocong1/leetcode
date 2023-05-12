/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head == null ) return null;
    if(head.next == null) return head;
    var dummy = new ListNode(head);
    dummy.next = head;
    var pre = dummy;
    var next = head.next;
    var cur = head;
    var after = next.next;

    cur.next = swapPairs(after);
    next.next = cur;
    pre.next = next;

    return dummy.next;

    
};
// @lc code=end

