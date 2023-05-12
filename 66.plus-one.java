/*
 * @lc app=leetcode id=66 lang=java
 *
 * [66] Plus One
 */

// @lc code=start
class Solution {
    public int[] plusOne(int[] digits) {
        int di_len = digits.length;
        for(int i = di_len-1;i >=0;i --){
            if(digits[i] < 9){
                        digits[i] +=1;
                        return digits;
            }else{
                digits[i] = 0;
            }
        }
        int [] res = new int[di_len+1];
        res[0] = 1;
        return res;
        
    }
}
// @lc code=end

