/*
 * @lc app=leetcode id=7 lang=java
 *
 * [7] Reverse Integer
 */

// @lc code=start
class Solution {
    public int reverse(int x) {
        if (x == 0) {
            return 0;
        }
        int result = 0;
        while (x!= 0) {
            if (result > Integer.MAX_VALUE / 10 || result < Integer.MIN_VALUE/10){
                return 0;
            }
            result = result * 10 + x % 10;
            x /= 10;
        }
        return result;
        
    }
}
// @lc code=end

