#
# @lc app=leetcode id=15 lang=python3
#
# [15] 3Sum
#

# @lc code=start
class Solution(object):
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        _numsdict = {}
        _pos = []
        _neg = []
        ret = []
        _haveZero = False
        for i in nums:
            _numsdict[i] = _numsdict.get(i,0) + 1
        
        if 0 in _numsdict:
            _haveZero = True
            if _numsdict[0] > 2:
                ret.append([0,0,0])
            
        for k in _numsdict:
            if k > 0:
                _pos.append(k)
            elif k < 0:
                _neg.append(k)
        for i in _pos:
            for j in _neg:
                k = 0 - i - j
                if k in _numsdict:
                    if (i==k or j==k) and _numsdict[k]>1:
                        ret.append([k,i,j])
                    elif 0<= k < i or k <j :
                        ret.append([k,i,j])
        return ret
            
            

        
        
# @lc code=end

