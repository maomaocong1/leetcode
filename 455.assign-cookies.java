/*
 * @lc app=leetcode id=455 lang=java
 *
 * [455] Assign Cookies
 */

// @lc code=start
class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        int idx = 0, count = 0, len = Math.min(g.length, s.length);
        for (int i = 0; i < len && idx < s.length; i++) 
        {
        //System.out.println(--i-i);
        count += s[idx++] >= g[i] ? 1 : (--i - i);
    }
        return count;


        
    }
}
// @lc code=end

