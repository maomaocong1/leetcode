/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const mp = new Map();
    while(headA){
        mp.set(headA,0);
        headA = headA.next;
    }
    while(headB){
        if(mp.has(headB)){
            return headB;
        }else{
            headB = headB.next;
        }
    }
};
// @lc code=end

