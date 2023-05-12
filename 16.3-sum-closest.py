#
# @lc app=leetcode id=16 lang=python3
#
# [16] 3Sum Closest
#

# @lc code=start
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()

        def FindThreeSum(nums, k, target):

            len_nums = len(nums)

            if len_nums == k:
                return sum(nums[:k])

            if sum(nums[:k]) >= target:
                return sum(nums[:k])

            if sum(nums[-k:]) <= target:
                return sum(nums[-k:])

            if k == 1:
                tuple_match = [(x,abs(target-x)) for x in nums]
                return min(tuple_match, key=lambda x:x[1])[0]

            Close_Match = sum(nums[:k])
            for i,x in enumerate(nums[:-k+1]):
                if i>0 and nums[i-1] == x:
                    continue
                BestMatch = FindThreeSum(nums[i+1:],k-1,target-x)
                Current = x + BestMatch 
                if abs(target-Current) < abs(target-Close_Match):
                    if Current == target:
                        return Current
                    else:
                        Close_Match = Current
            return Close_Match 


        return FindThreeSum(nums,3,target)
# @lc code=end

