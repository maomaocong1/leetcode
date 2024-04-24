#
# @lc app=leetcode id=5 lang=python3
#
# [5] Longest Palindromic Substring
#

# @lc code=start
class Solution:
    def longestPalindrome(self, s: str) -> str:
        def expandAroundCenter(left:int, right:int)->str:
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            return s[left + 1:right]
        
        start,end = 0,0
        for i in range(len(s)):
            len1 = len(expandAroundCenter(i,i))
            len2 = len(expandAroundCenter(i,i+1))
            maxLen = max(len1,len2)
            if maxLen > end - start:
                start = i - (maxLen-1)//2
                end = i + (maxLen)//2
        return s[start:end+1]
        
        
        
# @lc code=end

