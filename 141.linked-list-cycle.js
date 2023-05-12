/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const dictionary = new Map();
    while (head != null) {
        if (dictionary.has(head)) {
            return true;
        } else {
            dictionary.set(head, true);
        }
        head = head.next;
    }
    return false;
};
// @lc code=end

