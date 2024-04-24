#
# @lc app=leetcode id=1611 lang=python3
#
# [1611] Minimum One Bit Operations to Make Integers Zero
#

# @lc code=start
class Solution:
    def minimumOneBitOperations(self, n: int) -> int:
        ans=0
        count=0
        print("n=====",bin(n))
        while n:
            count=count+1
            ans=-(ans+(n^(n-1)))
            print('--------------')
            print('ans === ',bin(abs(ans)))
            print(bin(n))
            print(bin(n-1))
            n&=n-1
        return abs(ans)   
    
    
        
# @lc code=end

