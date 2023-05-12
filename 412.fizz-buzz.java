import java.util.List;

/*
 * @lc app=leetcode id=412 lang=java
 *
 * [412] Fizz Buzz
 */

// @lc code=start
class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> res    = new ArrayList<String>();
        for (int i = 1; i <= n; i++){
            if(i % 15 == 0) {
                res.add("FizzBuzz");
                continue;
            }
            if(i % 3 == 0) {
                res.add("Fizz");
                continue;
            }
            if(i % 5 == 0) {
                res.add("Buzz");
                continue;
            }
            res.add(String.valueOf(i));
        }
        return res;
    }
}
// @lc code=end

