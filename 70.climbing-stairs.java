/*
 * @lc app=leetcode id=70 lang=java
 *
 * [70] Climbing Stairs
 */

// @lc code=start
class Solution {
    public int climbStairs(int n) {
        Map<Integer, Integer> map = new HashMap<>();
        map.put(1, 1);
        map.put(2, 2);
        for(int i=3; i<=n; i++) {
            map.put(i, map.get(i-1)+map.get(i-2));
        }
        return map.get(n);

        
    }
}
// @lc code=end

