/*
 * @lc app=leetcode id=387 lang=java
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
class Solution {
    public int firstUniqChar(String s) {
        for(int i = 0 ; i < s.length();i++){
            int a = s.indexOf(s.charAt(i));
            int b = s.lastIndexOf(s.charAt(i));
            if(a==b) return i;
        }
        return -1;
        
    }
}
// @lc code=end

