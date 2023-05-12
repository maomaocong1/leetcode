/*
 * @lc app=leetcode id=405 lang=java
 *
 * [405] Convert a Number to Hexadecimal
 */

// @lc code=start
class Solution {
    
    public String toHex(int num) {
        if(num == 0) return "0";
        Map<Integer, String> map = new HashMap<Integer, String>();
        map.put(0,"0");
        map.put(1,"1");
        map.put(2,"2");
        map.put(3,"3");
        map.put(4,"4");
        map.put(5,"5");
        map.put(6,"6");
        map.put(7,"7");
        map.put(8,"8");
        map.put(9,"9");
        map.put(10,"a");
        map.put(11,"b");
        map.put(12,"c");
        map.put(13,"d");
        map.put(14,"e");
        map.put(15,"f");
        
        int sign =num>0?0:1;
        long unum = Integer.toUnsignedLong(num);
        StringBuilder res = new StringBuilder();
        while (unum>0){
            //System.out.println(unum);
            int digit = (int)(unum % 16);
            String tmp = map.get(digit);
            res.append(tmp);
            unum/=16;
        }
      
            return res.reverse().toString();
        
        

        
    }
}
// @lc code=end

