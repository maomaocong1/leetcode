/*
 * @lc app=leetcode id=459 lang=java
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
class Solution {
    public boolean repeatedSubstringPattern(String s) {
        int n = s.length();
    for (int len = 1; len <= n/2; len++) {
        if (n % len == 0) {
            String substr = s.substring(0, len);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < n/len; i++) {
                sb.append(substr);
            }
            if (sb.toString().equals(s)) {
                return true;
            }
        }
    }
    return false;
    }
}
// @lc code=end

