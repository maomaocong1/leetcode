/*
 * @lc app=leetcode id=14 lang=java
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
class Solution {
    public String longestCommonPrefix(String[] strs) {
        int str_len =strs.length;
        String res = strs[0];
        for (int i = 0;i < str_len;i++){
            while(strs[i].indexOf(res) != 0){
                res = res.substring(0,res.length()-1);
                if(res.length() == 0){
                    return "";
                }

            }
        }
        return res;
    }
}
// @lc code=end

