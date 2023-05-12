import java.util.ArrayList;
import java.util.Map;

/*
 * @lc app=leetcode id=409 lang=java
 *
 * [409] Longest Palindrome
 */

// @lc code=start
class Solution {
    public int longestPalindrome(String s) {
        Map<Character,Integer> mp = new HashMap<Character,Integer>();

        for(int i = 0; i <s.length(); i++) {
            int tmp = mp.getOrDefault(s.charAt(i), 0);
            mp.put(s.charAt(i),tmp+1);
        }
        //System.out.println(s.length());

       // System.out.println(mp);
        int res = 0;
        int maxodd = 0;
        char maxchar='0';
        for(Character c : mp.keySet()) {
            if(mp.get(c)%2 == 0){
                res +=mp.get(c);
                mp.put(c,1);
            }else{
                if(mp.get(c) > maxodd) {
                    maxodd = mp.get(c);
                    maxchar = c;
                }
                }

        }
        
        res += maxodd;
        mp.remove(maxchar);

        for(Character c : mp.keySet()) {
           res += mp.get(c)-1;

        }

        

        return res;
        
    }
}
// @lc code=end

