/*
 * @lc app=leetcode id=415 lang=java
 *
 * [415] Add Strings
 */

// @lc code=start
class Solution {
    public String addStrings(String num1, String num2) {
        int i = num1.length()-1;
        int j = num2.length()-1;
        int carry =0;
        StringBuilder sb = new StringBuilder();
        while(i>= 0 || j>=0 || carry>0) {
            int sum = carry;
            if(i>=0) sum += num1.charAt(i--) - '0';
            if(j>=0) sum += num2.charAt(j--) - '0';
            carry = sum > 9 ? 1 : 0;
            sb.append(sum%10);
        }
        return sb.reverse().toString();
    }
}
// @lc code=end

