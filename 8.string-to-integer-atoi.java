/*
 * @lc app=leetcode id=8 lang=java
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
class Solution {
    public int myAtoi(String input) {
        int sign = 1; 
        int result = 0; 
        int index = 0;
        
        String s = input.strip();
        //System.out.println(s);
       
        if (s.length()==0) return 0;
        
        // sign = +1, if it's positive number, otherwise sign = -1. 
        if (s.charAt(0) == '+') {
            sign = 1;
            s = s.substring(1);
        } else if (s.charAt(0) == '-') {
            sign = -1;
            s = s.substring(1);
            //System.out.println(s);
        }
        int n = s.length();
        if(n==0) return 0;
        // Traverse next digits of input and stop if it is not a digit
        while (index < n && Character.isDigit(s.charAt(index))) {
            int digit = s.charAt(index) - '0';

            // Check overflow and underflow conditions. 
            if ((result > Integer.MAX_VALUE / 10) || 
                (result == Integer.MAX_VALUE / 10 && digit > Integer.MAX_VALUE % 10)) {     
                // If integer overflowed return 2^31-1, otherwise if underflowed return -2^31.    
                return sign == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }
            
            // Append current digit to the result.
            result = 10 * result + digit;
            index++;
        }
        
        // We have formed a valid number without any overflow/underflow.
        // Return it after multiplying it with its sign.
        return sign * result;
    }
}
// @lc code=end

