/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var ans = "";
    var minlen = Number.MAX_SAFE_INTEGER;
    for(let i =0;i<strs.length;i++) {
            minlen = Math.min(minlen,strs[i].length);
    }
    //console.log(minlen);


    for(let index = 0;  index< minlen ; index++) {

    for(let i =0;i<strs.length;i++) {
        let c = strs[0].charAt(index);
       
        if(strs[i][index] == c){
            if(i < strs.length-1){
                continue;
            }else{
                if(c===strs[i].charAt(index)){
                    ans += c.toString();
                    //index ++;           
                }
                
            }
        }
            else{
                return ans;
            }
        }
        //console.log(ans);

    }
    return ans;
}
    
    

// @lc code=end

