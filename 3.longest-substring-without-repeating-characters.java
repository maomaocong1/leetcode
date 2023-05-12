/*
 * @lc app=leetcode id=3 lang=java
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character,Integer> mp = new HashMap<Character,Integer>();
        int l =0;
        int res =0;
       for(int i =0; i < s.length(); i++) {
        if(mp.containsKey(s.charAt(i))){
            //System.out.println(l);
            res = Math.max(res,i-l);
            l = Math.max(l,mp.get(s.charAt(i))+1);
        }
        mp.put(s.charAt(i),i);
        //System.out.println(l);
        //System.out.println(i);
        res = Math.max(res,i-l+1);
       }
        return res;
    }
}
// @lc code=end

