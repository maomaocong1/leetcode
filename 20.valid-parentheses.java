/*
 * @lc app=leetcode id=20 lang=java
 *
 * [20] Valid Parentheses
 */

// @lc code=start
class Solution {
    public boolean isValid(String s) {
        Map<Character, Character> mp = new HashMap<>();
        mp.put('(',')');
        mp.put('{','}');
        mp.put('[',']');


        Stack<Character> stack = new Stack<Character>();
        
        int m = s.length();
        for(int i =0;i < m ; i++ ){
            char res = s.charAt(i);
            if(mp.containsKey(res)){
                stack.push(res);
            }
            else if (stack.isEmpty()){
                return false;
            }else{
                char tmp = stack.pop();
               // System.out.println(stack);

               if(res == mp.get(tmp)) continue;
               return false;
            }
        }
        return stack.isEmpty();
    }
}
// @lc code=end

