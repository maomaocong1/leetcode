/*
 * @lc app=leetcode id=392 lang=java
 *
 * [392] Is Subsequence
 */

// @lc code=start
class Solution {
    public boolean isSubsequence(String s, String t) {
        int n = t.length(), m = s.length(), i = 0, j = 0;
        char [] ss = s.toCharArray(), tt = t.toCharArray();

        if(m < 1) return true;

        while(i < n) {
            if(tt[i] == ss[j]) j++;
            i++;
            if(j == m) return true;
        }
        return false;
    }
}
// @lc code=end

