/*
 * @lc app=leetcode id=367 lang=java
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
class Solution {
    public boolean isPerfectSquare(int num) {
        if (num < 2) {
            return true;
          }
        
        long left = 2, right = num/2,mid,guessNum;
        while(left<=right){
            mid = left + (right-left)/2;
            guessNum = mid*mid;
           if(guessNum == num){
            return true;
           }
           else if(guessNum > num){
            right = mid - 1;
           }else{
            left = mid + 1;
           }
        }
        return false;
        
    }
}
// @lc code=end

