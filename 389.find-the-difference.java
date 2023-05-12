/*
 * @lc app=leetcode id=389 lang=java
 *
 * [389] Find the Difference
 */

// @lc code=start
class Solution {
    public char findTheDifference(String s, String t) {
       // Initialize ch with 0, because 0 ^ X = X
        // 0 when XORed with any bit would not change the bits value.
        char ch = 0;

        // XOR all the characters of both s and t.
        for (int i = 0; i < s.length(); i += 1) {
            ch ^= s.charAt(i);
        }
       // System.out.println(ch);
        for (int i = 0; i < t.length(); i += 1) {
            ch ^= t.charAt(i);
        }
        //System.out.println(ch);

        // What is left after XORing everything is the difference.
        return ch;


    }
}
// @lc code=end

