#
# @lc app=leetcode id=1 lang=python3
#
# [1] Two Sum
#

# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map={}
        for i in range(len(nums)):
            res = target - nums[i]
            if res in map.keys():
                return [i,map.get(res)]
            else:
                map[nums[i]]=i
        return []


        
# @lc code=end

