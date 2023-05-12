/*
 * @lc app=leetcode id=58 lang=java
 *
 * [58] Length of Last Word
 */

// @lc code=start
class Solution {
    public int lengthOfLastWord(String s) {
        String tmp = s.trim();
        //System.out.println(tmp);
        if (tmp.length() == 0) {
            return 0;
        }
        int i = tmp.length()-1;
        for ( i = tmp.length() - 1; i >= 0; i--) {
           // System.out.println(i);
            if (tmp.charAt(i)!=' ') continue;
            else{
                break;
            }
        }
        return tmp.length() - i-1;
        }
        
    }

// @lc code=end

