/*
 * @lc app=leetcode id=202 lang=java
 *
 * [202] Happy Number
 */

// @lc code=start
class Solution {
    public boolean isHappy(int n) {
        Map<Integer,Integer> mp = new HashMap<>();
        while(!mp.containsKey(n) && n !=1){
            mp.put(n,0);
            n = this.getNext(n);
            //System.out.println(n);
        }
        return n == 1;
        
    }

    public int getNext(int x){
        int sum=0;
        while(x>0){
            sum += (x %10)*(x %10);
            x/=10;
        }
        return sum;
    }
}
// @lc code=end

