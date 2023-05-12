/*
 * @lc app=leetcode id=69 lang=java
 *
 * [69] Sqrt(x)
 */

// @lc code=start
class Solution {
    public int mySqrt(int x) {
        if (x == 0) {
            return 0;
        }
        if (x == 1) {
            return 1;
        }
        int left = 1;
        int right = x;
        long num;
        while (left < right) {
            int mid = left + (right - left) / 2;
            num = (long)mid * mid;    
            if (num > x) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left - 1;
        
    }
}
// @lc code=end

