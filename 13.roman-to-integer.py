#
# @lc app=leetcode id=13 lang=python3
#
# [13] Roman to Integer
#

# @lc code=start
class Solution:
    def romanToInt(self, s: str) -> int:
        values = {
            'I':1,
            'V':5,
            'X': 10,
            'L':50,
            'C':100,
            'D':500,
            'M':1000
}
        i =0
        total = 0 
        while i < len(s):
            if  i < (len(s)-1) and values[s[i]]< values [s[i+1]]:
                total += values[s[i+1]] - values[s[i]]
                i +=2
            else:
                total +=values[s[i]]
                i+=1
        return total
        
# @lc code=end

