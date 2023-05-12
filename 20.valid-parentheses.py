#
# @lc app=leetcode id=20 lang=python3
#
# [20] Valid Parentheses
#

# @lc code=start
class Solution:
    def isValid(self, s: str) -> bool:
        len_s = len(s)
        if len_s % 2 ==1:
            print("1111")
            return False

        tmp = []
        
        for i in range(len_s):
            if s[i] == "(" or s[i] == "{" or s[i] == "[":
                tmp.append(s[i])
            

            if s[i] == ")" or s[i] == "}" or s[i] == "]":
                if tmp ==[]:
                    return False
                
                if s[i] == ")":
                    print(tmp[-1])
                    if tmp[-1] == "(":
                        tmp.pop(-1)
                    else:
                        break
                elif s[i] == "]":
                    if tmp[-1] == "[":
                        tmp.pop(-1)
                    else:
                        break
                elif  s[i] =="}":
                    if tmp[-1] == "{":
                        tmp.pop(-1)
                    else:
                        break
        if tmp==[]:
            return True
        return False
        
# @lc code=end

