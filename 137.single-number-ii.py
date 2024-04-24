#
# @lc app=leetcode id=137 lang=python3
#
# [137] Single Number II
#

# @lc code=start
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        a = set(nums)
        a = sum(a)*3 - sum(nums)
        return a//2
        
# @lc code=end

