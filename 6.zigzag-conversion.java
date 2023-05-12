/*
 * @lc app=leetcode id=6 lang=java
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
class Solution {
    public String convert(String s, int numRows) {
        if (numRows == 1) {
            return s;
            }
            String[] zigzag = new String[numRows];
            for (int i = 0; i < numRows; i++) {
            zigzag[i] = "";
            }
            int index = numRows - 1;
            for (int i = 0; i < s.length(); i++) {
            zigzag[Math.abs((i + index) % (2 * index) - index)] += s.charAt(i);
            }
            return String.join("", zigzag);
          
    }
    
    
}
// @lc code=end

