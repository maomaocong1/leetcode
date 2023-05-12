/*
 * @lc app=leetcode id=13 lang=java
 *
 * [13] Roman to Integer
 */

// @lc code=start
class Solution {
    public int romanToInt(String s) {

        int ans = 0 , num =0;
        for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(s.length() - 1 - i);
        switch (c) {
            case 'I':
                num = 1;
                break;
            case 'V':
                num = 5;
                break;
            case 'X':
                num = 10;
                break;
            case 'L':
                num = 50;
                break;
            case 'C':
                num = 100;
                break;
            case 'D':
                num = 500;
                break;
            case 'M':
                num = 1000;
                break;
        }
        if (4*num < ans) {
            ans -=num;
        }
        else{
            ans +=num;
        }
    }
        
    return ans;
        
        
    
}
}
// @lc code=end

