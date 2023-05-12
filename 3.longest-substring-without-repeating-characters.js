/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max_len =0;
    let l = 0;
    let r = 0;
    let mp = new Map();
    for(let i = 0; i < s.length; i++) {
        if(!mp.has(s.charAt(i))){
            max_len = Math.max(max_len,i-l+1)
            mp.set(s.charAt(i),i);
        }else{
            l = Math.max(l,mp.get(s.charAt(i))+1);
            max_len = Math.max(max_len,i - l+1);
            mp.set(s.charAt(i),i);
        }
        console.log("l=="+l+"i"+i);
    }
    return max_len;
    
};
// @lc code=end

