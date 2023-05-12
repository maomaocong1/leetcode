#
# @lc app=leetcode id=9 lang=python3
#
# [9] Palindrome Number
#

# @lc code=start
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0 :
            return False
        
        str_a = str(x)
        str_b = str_a[::-1]
        if str_a == str_b:
            return True
        return False
        
# @lc code=end

