/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
const L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}

var letterCombinations = function(D) {
    let len = D.length, ans = [];
    if (D.length===0) return [];
    function dfs(pos,str){
        if(str.length===len) {ans.push(str);}
        else{
            let letters = L[D[pos]];
            for(let i=0;i < letters.length; i++){
                dfs(pos+1,str+letters[i]);
            }
        }
        
    }
    dfs(0,"")
    return ans
};
// @lc code=end

