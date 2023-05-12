/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var dummy = new ListNode();
    dummy.next = head;
    var cur = head;
    var pre = dummy;
    while(cur != null) {
        if(cur.val === val){
            pre.next = cur.next;
            cur = cur.next;
            continue;
        }

        cur = cur.next;
        pre = pre.next;
    }
    return dummy.next;
};
// @lc code=end

