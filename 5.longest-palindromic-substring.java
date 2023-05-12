/*
 * @lc app=leetcode id=5 lang=java
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
class Solution {
    public String longestPalindrome(String s) {
        if (s == null || s.length() == 0) {
            return "";
        }
        int start = 0,end =0,len=0;
        
        for (int i = 0; i < s.length(); i++) {
            int len1 = isPalindrome(s, i, i);
            int len2 = isPalindrome(s, i, i + 1);
            len = Math.max(len1, len2);
            if(len > end - start+1) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        return s.substring(start, end + 1);
    }
    
    private int isPalindrome(String s, int left, int right) {   
        int L = left, R = right;
        while (L >= 0 && R < s.length() && s.charAt(L) == s.charAt(R)) {
            L--;
            R++;
        }
        return R - L - 1;
    }
}
// @lc code=end

