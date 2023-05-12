#
# @lc app=leetcode id=14 lang=python3
#
# [14] Longest Common Prefix
#

# @lc code=start
import sys
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        min_str = sys.maxsize
        count = len(strs)
        if count == 1:
            return strs[0]
        for i in range(len(strs)):
            min_str = min(min_str,len(strs[i]))
        max_prefix=""
        isend = 0
        #print(min_str)
        for i in range(min_str):
            for j in range(1,len(strs)):
                prefix = strs[0][i]
                #print("prefix === "+prefix)
                #print("strs[j][i]====" + strs[j][i])
                if prefix == strs[j][i]:
                    print("j==="+str(j))
                    if j == len(strs)-1:
                        max_prefix += prefix
                    else:
                        continue
                else:
                    isend =1
                    break
            if isend == 1:
                break
        

       
        return max_prefix
                

            
            
        
# @lc code=end

