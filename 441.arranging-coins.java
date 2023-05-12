/*
 * @lc app=leetcode id=441 lang=java
 *
 * [441] Arranging Coins
 */

// @lc code=start
class Solution {
    public int arrangeCoins(int n) {
        long left = 0, right = n;
        long mid;
        while (left <= right) {
            mid = left + (right - left)/2;
            long tmp = mid*(mid+1)/2;
            if(tmp < n){
                left = mid +1;
            }else if (tmp > n){
                right = mid -1;
            }else{
                return (int)mid;
            }
            


        }
        return (int)right;
        
    }

    
}
// @lc code=end

